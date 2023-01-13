import { AppBar, Box, Modal } from "@mui/material"
import { googleLogout } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { addUser } from '../services/LoginService';
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
interface prop {
    open: boolean;
    setOpen: (value: boolean) => void
}
export const Login = ({ open, setOpen }: prop) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const handleClose = () => {
        setOpen(false);
    }
    const style = {

        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const loginHandler = (credentialResponse: any) => {
        console.log(credentialResponse.credential);
        if (credentialResponse.credential !== undefined) {
            setLoggedIn(true);
            var decoded:any = jwt_decode(credentialResponse.credential);
            localStorage.setItem('token', credentialResponse.credential);
            localStorage.setItem('picture', decoded.picture);
            console.log(decoded);
            setOpen(false);
            addUser(credentialResponse.credential);
        }
        window.location.reload();
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <GoogleOAuthProvider clientId="22805011057-sfgcohpdbgp7a0gaq229o0coqlcofrhq.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={loginHandler}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                        useOneTap
                    />
                </GoogleOAuthProvider>
            </Box>
        </Modal>
    )
}