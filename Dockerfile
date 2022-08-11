
FROM node:14.16.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apt-get update
RUN npm install
RUN npm install pkg.json
RUN npm install package-lock.json
# If you are building your code for production
# RUN npm ci --only=production

# RUN apt-get update \
#     && DEBIAN_FRONTEND=noninteractive apt-get install -y \
#     net-tools \
#     # && DEBIAN_FRONTEND=noninteractive TZ=Africa/Lagos apt-get -y install tzdata \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

# RUN apt-get update \
#     && apt-get install sudo 
# RUN apt-get -y install openssh-server
# RUN sudo apt-get install systemd

# RUN echo "Africa/Lagos" > /etc/timezone \
#     && dpkg-reconfigure -f noninteractive tzdata

RUN --name lendersqlDB -p 3306:3306 -e DB_PASSWORD=my-secret-pw -d mysql
# Download CA certificate for Authenticating to AWS DocumentDB Cluster

# Bundle app source
COPY . .

EXPOSE 3306
CMD [ "node", "index.js" ]
