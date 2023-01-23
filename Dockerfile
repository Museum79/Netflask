# Use the official openjdk image as the base image
FROM openjdk:8-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the jar file of your application to the container
COPY target/your-app.jar /app/your-app.jar

# Expose the port on which your application runs
EXPOSE 9000

# Run the jar file using the "java" command
CMD ["java", "-jar", "your-app.jar"]