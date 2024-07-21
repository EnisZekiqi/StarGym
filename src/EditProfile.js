import { useSuccessMessage } from "./SuccessMessageContext";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Cookies from "js-cookie";

const EditProfile = () => {
  const { formDataArray } = useSuccessMessage();

  // Extract email and password from the form data array
  const email = formDataArray[0];

  const [nickname, setNickname] = useState(Cookies.get("nickname") || "");
  const [password, setPassword] = useState(Cookies.get("password") || "");

  const [color, setColor] = useState("#475E36");
  const [error, setError] = useState(false);
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // Save nickname to localStorage when it changes
    Cookies.set("nickname", nickname, { expires: 365 });
    Cookies.set("password", password, { expires: 365 });
  }, [nickname, password]);

  const handleSubmit = () => {
    if (nickname.trim()) {
      const firstLetter = nickname.trim().charAt(0).toUpperCase(); // Extract the first letter and convert it to uppercase

      const defaultAvatar = document.getElementById("defaultAvatar");
      defaultAvatar.textContent = firstLetter;
    }
    Cookies.set("nickname", nickname);
    Cookies.set("password", password);

    if (nickname.trim() === "") {
      setError(true);
      setOpen(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    localStorage.setItem("email", email);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("password", password);

    // Redirect the user to another page
    // Replace 'dashboard' with the path of the page you want to redirect to
    window.location.href = "/main";
  };

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the color state with the selected color
  };

  const [file, setFile] = useState(null);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const targetFile = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const avatarDataURL = reader.result;
        setFile(avatarDataURL);
        Cookies.set("avatar", avatarDataURL); // Store the avatar image URL in cookies
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [visibilityOn, setVisibilityOn] = useState(false);

  const toggleVisibility = () => {
    setVisibilityOn(!visibilityOn);
  };

  return (
    <div>
      <div className="backdrop">
        <div className="loader"></div>
      </div>
      <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <h1 className="font-bold text-2xl">Account</h1>
        <h1 className="font-semibold text-lg mt-2">Account Information</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-8 md:gap-0">
          <ul className="mt-4">
            <li className="text-center">
              <b>Email :</b> {email}
            </li>
            <div className="input-wrapper2 mt-4">
              <input
                value={nickname}
                onChange={handleNickname}
                type="text"
                placeholder="Nickname"
                name="text"
                className="input"
                style={{ zIndex: 10, position: "relative" }} // Ensure input is on top
              />
            </div>
          </ul>
          <div className="xx flex flex-col items-center justify-center mt-4 md:mt-0">
            <h1 className="font-semibold text-lg">Avatar</h1>
            <div
              id="defaultAvatar"
              style={{ backgroundColor: color }}
              className="avatar flex text-center justify-center mt-4 font-semibold text-3xl"
            >
              <Avatar
                sx={{ scale: 1.5 }}
                style={{ backgroundColor: color, width: 100, height: 100 }}
                src={file}
              />
            </div>
            <div className="flex mt-4 gap-2">
              <Button
                sx={{ border: "1px solid #475E36", color: "#475E36" }}
                variant="outlined"
                component="label"
                role={undefined}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Photo
                <VisuallyHiddenInput
                  style={{ display: "none" }}
                  onChange={targetFile}
                  type="file"
                />
              </Button>
              <input
                value={color}
                onChange={handleColorChange}
                className="cursor-pointer mt-2"
                type="color"
                id="favcolor"
                name="favcolor"
              />
            </div>
          </div>
          <div className="xx items-center justify-center mt-4 md:mt-0">
            <h1 className="font-semibold text-lg mt-2 text-center">Security</h1>
            <li style={{ listStyle: "none" }} className="text-center mt-4">
              <b>Password :</b>
              <div className="input-wrapper2 mt-4">
                <input
                  type={visibilityOn ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ zIndex: 10, position: "relative" }} // Ensure input is on top
                />
                {visibilityOn ? (
                  <VisibilityIcon
                    onClick={toggleVisibility}
                    sx={{ cursor: "pointer", color: "#475E36" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={toggleVisibility}
                    sx={{ cursor: "pointer", color: "#475E36" }}
                  />
                )}
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-4 mt-4 md:mt-0">
        <Alert className="w-fit" severity="warning">
          Email cannot be changed when you Sign up
        </Alert>
        <Alert className="w-fit" severity="warning">
          Nickname is necessary
        </Alert>
        <Alert className="w-fit" severity="warning">
          Account expires after 365 days
        </Alert>
      </div>
      <div className="flex items-center md:items-stretch justify-center md:justify-end mt-8 md:mt-0">
        <button className="btnsign mr-2 mb-2">
          <a href="/signup">Back</a>
        </button>
        <button className="btnsign mr-2 mb-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {error && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
        >
          <Alert
            severity="error"
            variant="filled"
            sx={{ width: "fit-content", marginLeft: "20px", marginTop: "20px" }}
          >
            <p>Fill the nickname field</p>
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default EditProfile;
