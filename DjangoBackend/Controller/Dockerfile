# Use an official Python runtime as a base image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set the working directory
WORKDIR /DjangoBackend/Controller

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy the Django project files to the container
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Run the Django development server
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000", "--noreload"]