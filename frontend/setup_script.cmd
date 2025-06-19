@echo off
REM Step 1: Create root folder
if not exist "vanta-ai" (
    mkdir vanta-ai
)

REM Step 2: Move existing backend folder
if exist "vanta-backend" (
    move vanta-backend vanta-ai\
)

REM Step 3: Rename to 'backend'
cd vanta-ai
if exist "vanta-backend" (
    rename vanta-backend backend
)

REM Step 4: Create frontend structure
mkdir frontend\public
mkdir frontend\pages
mkdir frontend\src\components
mkdir frontend\src\api
mkdir frontend\src\features\upload-scan-result
mkdir frontend\src\features\report-abuse
mkdir frontend\src\features\legal-complaint-generator
mkdir frontend\src\features\fir-chatbot
mkdir frontend\src\features\emotional-support-chatbot
mkdir frontend\src\features\evidence-locker
mkdir frontend\src\features\anon-mode-silent-sos

REM Step 5: Create backend structure
mkdir backend\controllers
mkdir backend\middleware
mkdir backend\routes
mkdir backend\services
mkdir backend\uploads
mkdir backend\config

REM Backend feature-specific services
mkdir backend\services\uploadScanResultService
mkdir backend\services\reportAbuseService
mkdir backend\services\legalComplaintService
mkdir backend\services\firChatbotService
mkdir backend\services\emotionalSupportChatbotService
mkdir backend\services\evidenceLockerService
mkdir backend\services\anonModeService

REM Step 6: Create AI services
mkdir ai_services\deepfake_detection_api\weights
mkdir ai_services\chatbot_api

REM Step 7: Create evidence storage config
mkdir evidence_storage\config

echo Project structure setup complete.
pause
