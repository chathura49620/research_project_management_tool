import React, { Fragment, useState } from "react";
import axios from "axios";
import Progress from "./../reusables/progress";

const AddDocuments = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
          setTimeout(() => setUploadPercentage(0), 10000);
        },
        // Clear percentage
      });
      // const { fileName, filePath } = res.data;

      const jsonOb = {
        documentName: filename,
      };

      const response = await fetch("http://localhost:5000/addDocuments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonOb),
      });

      const data = await response.json();

      // setUploadedFile({ fileName, filePath });
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with  the server");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                {filename}
              </label>
              <input
                style={{ border: "1px solid black" }}
                className="form-control"
                type="file"
                id="formFile"
                onChange={onChange}
              />
            </div>
            <input
              type="submit"
              value="upload"
              className="btn btn-primary btn-sm"
            />
          </form>
          <Progress percentage={uploadPercentage} />
        </div>
        <div className="col"></div>
      </div>
    </Fragment>
  );
};

export default AddDocuments;
