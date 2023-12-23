#!/bin/bash

# Navigate to the frontend directory and start the frontend
(cd frontend && npm start) &

# Navigate to the backend directory and start the backend
(cd backend && node index)
