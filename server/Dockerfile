# For more information, please refer to https://aka.ms/vscode-docker-python
# set base image as python
FROM python:3.11

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

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# defines the program or command to run when container starts
# it will run sh command and will pass run.sh as argument
CMD ["sh", "run.sh"]