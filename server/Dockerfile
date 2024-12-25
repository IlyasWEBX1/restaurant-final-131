# Use Python 3.11 official image from Docker Hub
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy your application's code to the container
COPY . /app/

# Install any required system dependencies (optional based on your needs)
RUN apt-get update && apt-get install -y libpq-dev

# Install Python dependencies specified in requirements.txt
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Expose port 8000 for your app
EXPOSE 8000

# Command to run your app using Gunicorn (adjust as needed for your project structure)
CMD ["gunicorn", "server.wsgi:application", "--bind", "0.0.0.0:8000"]
