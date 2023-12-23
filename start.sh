#!/bin/bash

# Navigate to the frontend directory and start the frontend
(cd frontend && npm install && npm start) &

# Navigate to the backend directory and start the backend
(cd backend && npm install && node index)
