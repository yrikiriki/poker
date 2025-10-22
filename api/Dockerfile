FROM gradle:7-jdk17

WORKDIR /api
COPY . .
RUN chmod +x ./gradlew

CMD [ "./gradlew", "bootRun" ]
