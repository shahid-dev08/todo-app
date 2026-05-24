# Todo App

A full stack todo web app built during a learning phase.

## Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python, FastAPI
- Database: SQLite
- ORM: SQLModel

## Setup Instructions

### Backend
1. Navigate to the backend folder:
cd backend
2. Create and activate a virtual environment:
python -m venv venv
venv\Scripts\activate
3. Install dependencies:
pip install fastapi sqlmodel uvicorn
4. Run the server:
uvicorn main:app --reload

### Frontend
Open `frontend/index.html` in your browser after starting the backend.