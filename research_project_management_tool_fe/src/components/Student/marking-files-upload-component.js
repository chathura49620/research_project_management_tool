import React, { Component } from 'react';
import axios from 'axios';
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
export default class MarkingFilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            year:'',
            nameOfRubric:'',
            markingPdfFile: ''
        }
    }
    onFileChange(e) {
       
        this.setState({ markingPdfFile: e.target.files[0] })
    }
    onYearChange(e) {
        console.log("awa",e.target.value)
        this.setState({ year: e.target.value })
    }
    onNameChange(e) {
        this.setState({ nameOfRubric: e.target.value })
    }

    

    onSubmit(e) {
      
        e.preventDefault()
        const formData = new FormData()
        formData.append('rublicPdfFile', this.state.markingPdfFile);
        formData.append('year', this.state.year);
        formData.append('rublicName', this.state.rublicName);
        console.log(formData)
        axios.post("http://localhost:5000/api/marking-rubrics", formData, config 
        ).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <h3>Year</h3>
                        <div className="form-group">
                            <input type="text" onChange={this.onYearChange}/>
                        </div>
                        <h3>Name of the rubric</h3>
                        <div className="form-group">
                            <input type="text" onChange={this.onNameChange}/>
                        </div>
                        <h3>Marking File Uploader</h3>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}