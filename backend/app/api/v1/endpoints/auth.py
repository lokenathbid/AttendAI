from fastapi import APIRouter, HTTPException, status
from app.schemas.auth import LoginRequest, TokenResponse, UserPublic
from app.models.user import UserRole
from app.core.security import create_access_token

router = APIRouter()


@router.post("/auth/login", response_model=TokenResponse, summary="User Authentication (Student, Teacher, Admin)")
def login_user(payload: LoginRequest):
    """
    Initial authentication endpoint supporting Student, Faculty, and Admin roles.
    """
    # Demo/Initial architectural mock validation
    role = payload.role or UserRole.STUDENT
    name_map = {
        UserRole.STUDENT: "Arjun Mehta (Student)",
        UserRole.TEACHER: "Dr. Sunita Sharma (Faculty)",
        UserRole.ADMIN: "Campus Registrar (Admin)"
    }

    mock_user = UserPublic(
        id=101,
        email=payload.email,
        full_name=name_map.get(role, "Authorized User"),
        role=role,
        is_active=True
    )

    access_token = create_access_token(subject=mock_user.id, role=role.value)

    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        user=mock_user
    )
