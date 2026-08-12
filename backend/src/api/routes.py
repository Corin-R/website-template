import logging
from fastapi import APIRouter
from src.settings import Settings

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api")

@router.get("/health")
def health():
    return {"status": "ok"}

@router.get("/version")
def health():
    return {"version": Settings.APP_VERSION}
