# For more information, please refer to https://aka.ms/vscode-docker-python
# set base image as python
FROM python:3.12

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

RUN python -m pip install gunicorn[gevent]

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# set the working directory for the following instructions
WORKDIR /app

# copying the source code from local system to docker image
COPY . /app