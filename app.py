import os
import pyrebase
import requests
import nltk
import json
import moviepy.editor
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app, storage
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo, MongoClient
import dill
import pickle
import firebase
from localStoragePy import localStoragePy
import speech_recognition as sr
import urllib
import openai
import fer as fer
import numpy as np

import cv2
import camera as face
from nltk import classify, NaiveBayesClassifier

app=Flask(__name__)

openai.api_key = "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"
openai.Model.list()


firebaseConfig = {
  "apiKey": "AIzaSyD3NNMUwNerxeYE1f8x2WQlWVbTZgbA478",
  "authDomain": "fyp-backend-9e913.firebaseapp.com",
  "databaseURL": "https://fyp-backend-9e913-default-rtdb.firebaseio.com",
  "projectId": "fyp-backend-9e913",
  "storageBucket": "fyp-backend-9e913.appspot.com",
  "messagingSenderId": "506376607999",
  "appId": "1:506376607999:web:944731982570baca9394ca"
};
cred = credentials.Certificate('fyp-backend-9e913-firebase-adminsdk-98t8m-130d06bb6d.json')
default_app = initialize_app(cred)
firebase=pyrebase.initialize_app(firebaseConfig)
storage=firebase.storage()

db = firestore.client()
todo_ref = db.collection('todos')
CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

facec = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
model = fer.FacialExpressionModel("model.json", "model_weights.h5")
font = cv2.FONT_HERSHEY_SIMPLEX


def get_frame(folder):
    print('In get frame')
    # cap=cv2.VideoCapture(path)
    arr=[]
    i = 0
      # while (cap.isOpened()):
    #     ret, fr = cap.read()
    #     if ret == False:
    #         print(ret)
    #         break
    images = []
    for filename in os.listdir(folder):
        img = cv2.imread(os.path.join(folder,filename))
        if img is not None:
            images.append(img)
    for i in range (len(images)):
          fr=images[i]
          gray_fr=cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY)
          faces = facec.detectMultiScale(gray_fr, 1.3, 5)
          for (x, y, w, h) in faces:
              fc = gray_fr[y:y+h, x:x+w]
              roi = cv2.resize(fc, (48, 48))
              pred = model.predict_emotion(roi[np.newaxis, :, :, np.newaxis])
              arr.append(pred)
              print(pred)
              cv2.putText(fr, pred, (x, y), font, 1, (255, 255, 0), 2)
              cv2.rectangle(fr,(x,y),(x+w,y+h),(255,0,0),2)  
    #     i += 1
    # cap.release()
    return arr
# class VideoCamera(object):
#     def __init__(self,path):
#         self.video = cv2.VideoCapture(path)
#     def __del__(self):
#         self.video.release()
#     # returns camera frames along with bounding boxes and predictions
#     def get_frame(self):
#         ret, fr = self.video.read()

#         gray_fr = cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY)
#         faces = facec.detectMultiScale(gray_fr, 1.3, 5)
#         for (x, y, w, h) in faces:
#             fc = gray_fr[y:y+h, x:x+w]
#             roi = cv2.resize(fc, (48, 48))
#             pred = model.predict_emotion(roi[np.newaxis, :, :, np.newaxis])
#             cv2.putText(fr, pred, (x, y), font, 1, (255, 255, 0), 2)
#             cv2.rectangle(fr,(x,y),(x+w,y+h),(255,0,0),2)
#         return fr

# def gen(camera):
#     while True:
#         frame = camera.get_frame()
#         cv2.imshow('Facial Expression Recognization', frame)
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break
#     cv2.destroyAllWindows()


class frames():
    def __init__(self):
        super(frames, self).__init__()

    def convert_to_frames(self, filename, directory):
        cap = cv2.VideoCapture(filename)
        i = 0
        while (cap.isOpened()):
            ret, frame = cap.read()
            if ret == False:
                break
            cv2.imwrite(directory +'/frame' + str(i) + '.jpg', frame)
            i += 1
        cap.release()
        cv2.destroyAllWindows()


@app.route('/api/auth/signup',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def signup():
    if request.method=='POST':
        try:
            id = request.json['email']
            password=request.json['pass']
            username=request.json['username']
            cnfrmpass=request.json['cnfrmpass']
            print('pass',password)  
            print('cpass',cnfrmpass)  
            if password==cnfrmpass:
                todo_ref.document(id).set(request.json)
                return jsonify({'status':'success','message':'LoggedIn'})
            else:
                return jsonify({'status':'Failed','message':'LoggedIn'})
        except Exception as e:
            return f"An Error Occurred: {e}"
                        
@app.route('/api/auth/login', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def login():
    if request.method == 'POST':
         email=request.json['email']
         password=request.json['pass']
         print(email)
         
         user_ref = db.collection('todos').where('email', '==', email).get()
         if len(user_ref) == 1:
             user_data = user_ref[0].to_dict()
             if user_data['pass'] == password:
                 return jsonify({'status':'success','message':'LoggedIn'})
             else:
                 return jsonify({'status':'failed','message':'LoggedInFailed'})
         else:
            return jsonify({'status':'failed','message':'LoggedInFailed'})


@app.route('/api/face',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def facer():
     if request.method == 'POST':
         print('here')
         path=request.json['downloadURL']
        #  gen(VideoCamera(path))
         f = urllib.request.urlopen(path)
         data=f.read()
         c=frames()
         c.convert_to_frames(path, 'Frames')
         print('Got Data')
         myarr=get_frame('Frames')
         print('myarr',myarr)
         print('out of frames') 
         elements_count={}   
         for element in myarr:
            if element in elements_count:
                elements_count[element]+=1
            else:
                elements_count[element]=1
        #  print(elements_count)
         test=os.listdir('Frames')
         for file in test:
             if file.endswith('.jpg'):
                 os.remove(os.path.join('Frames', file))
         positive=elements_count['Happy']
         negative=elements_count['Angry']
         neutral=elements_count['Neutral']
         print('positive',positive)
         print('negative',negative)
         if neutral>3000:
             return jsonify(neutral)
         if positive>negative:
             return jsonify(positive)
         elif negative>positive:
             return jsonify(negative)
         
@app.route('/api/upload',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def upload():
     if request.method == 'POST':
         path=request.json['downloadURL']
         filename=request.json['filename']
         print('filename',filename)
         with urllib.request.urlopen(path) as response, open(filename, 'wb') as outfile:
            data = response.read()
            outfile.write(data)
         f = urllib.request.urlopen(path)
         video = moviepy.editor.VideoFileClip(os.path.join(path))
         audio=video.audio 
         print('convertedtoaudio')
         audio.write_audiofile("create"+".mp3")
         print('filedone')
         audio_file= open("create.mp3", "rb")
         transcript = openai.Audio.translate("whisper-1", audio_file)
         tokenizer = nltk.tokenize.TreebankWordTokenizer()
         modelfile = 'final_prediction.pickle'
         model = pickle.load(open(modelfile, 'rb'))
         tokens = (tokenizer.tokenize(str(transcript)))
         prediction = model.classify(dict([token, True] for token in tokens))
         print(prediction)
         print(str(transcript))
         return jsonify(arr)
         

if __name__=='__main__':
    app.run(debug=False)