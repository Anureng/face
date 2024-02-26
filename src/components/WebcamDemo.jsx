import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import { useNavigate } from 'react-router-dom';


const width = 500;
const height = 500;

const WebcamDemo = () => {

    const navigate = useNavigate()
    const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
        faceDetectionOptions: {
            model: 'short',
        },
        faceDetection: new FaceDetection.FaceDetection({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
        }),
        camera: ({ mediaSrc, onFrame }) =>
            new Camera(mediaSrc, {
                onFrame,
                width,
                height,
            }),
    });

    if (facesDetected.toString.length === 1 && detected) {
        // console.log("Navigates");
        navigate('/')
        // window.location.reload()
    }
    console.log(facesDetected.toString.length);
    return (
        <div>
            <p>{`Loading: ${isLoading}`}</p>
            <p>{`Face Detected: ${detected}`}</p>
            <p>{`Number of faces detected: ${facesDetected}`}</p>
            <div style={{ width, height, position: 'relative' }}>
                {boundingBox.map((box, index) => (
                    <div
                        key={`${index + 1}`}
                        style={{
                            border: '4px solid red',
                            position: 'absolute',
                            top: `${box.yCenter * 100}%`,
                            left: `${box.xCenter * 100}%`,
                            width: `${box.width * 100}%`,
                            height: `${box.height * 100}%`,
                            zIndex: 1,
                        }}
                    />
                ))}
                <Webcam
                    ref={webcamRef}
                    forceScreenshotSourceSize
                    style={{
                        height,
                        width,
                        position: 'absolute',
                    }}
                />
            </div>
        </div>
    );
};

export default WebcamDemo;