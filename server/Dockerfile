FROM python:3.9-buster
#FROM gcr.io/google-appengine/python
#RUN virtualenv /env -p python3.7
RUN apt-get update
RUN apt-get -y install tzdata gcc libgl1-mesa-dev wget ffmpeg python3-pip vim
ENV TZ=Asia/Tokyo

COPY . /opt/app

WORKDIR /opt/app
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install git+https://github.com/Cupcakus/pafy
WORKDIR /opt/app/testdata
RUN python3 download_models.py
RUN wget --no-check-certificate https://raw.githubusercontent.com/opencv/opencv_extra/master/testdata/dnn/ssd_mobilenet_v2_coco_2018_03_29.pbtxt
WORKDIR /opt/app

ENV FLASK_APP /opt/app/server.py
CMD gunicorn server:app -b 0.0.0.0:$PORT -t 180 --log-file -
#ENTRYPOINT flask run -h 0.0.0.0 -p $PORT

