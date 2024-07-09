import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


function App() {
  const { register, control, handleSubmit, formState } = useForm();
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log("The date ", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row">
        <div className="col-md-6">
          <div className="form-group row">
            <label htmlFor="employeecode" className="col-sm-6 col-form-label">
            Employee code: 
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="employeecode"
                placeholder="employeecode"
                {...register("employeecode", {
                  required: {
                    value: true,
                    message: "employeecode is required"
                  }
                })}
              />
            </div>
            <p>{errors.employeecode?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="firstname" className="col-sm-6 col-form-label">
            First Name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="firstname"
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "firstname is required"
                  }
                })}
              />
            </div>
            <p>{errors.firstname?.message}</p>
          </div>
         <div className="form-group row">
            <label htmlFor="lastname" className="col-sm-6 col-form-label">
            Last Name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="lastname"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "lastname is required"
                  }
                })}
              />
            </div>
            <p>{errors.lastname?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="directmanager" className="col-sm-6 col-form-label">
            Direct Manager:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="directmanager"
                placeholder="directmanager"
                {...register("directmanager", {
                  required: {
                    value: true,
                    message: "directmanager is required"
                  }
                })}
              />
            </div>
            <p>{errors.directmanager?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="department" className="col-sm-6 col-form-label">
            Department:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="department"
                {...register("department", {
                  required: {
                    value: true,
                    message: "department is required"
                  }
                })}
              />
            </div>
            <p>{errors.department?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="designation" className="col-sm-6 col-form-label">
            Designation:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="designation"
                placeholder="designation"
                {...register("designation", {
                  required: {
                    value: true,
                    message: "designation is required"
                  }
                })}
              />
            </div>
            <p>{errors.designation?.message}</p>
          </div>
           <div className="form-group row">
            <label htmlFor="grade" className="col-sm-6 col-form-label">
            Grade:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="grade"
                placeholder="grade"
                {...register("grade", {
                  required: {
                    value: true,
                    message: "grade is required"
                  }
                })}
              />
            </div>
            <p>{errors.grade?.message}</p>
          </div>
           <div className="form-group row">
            <label htmlFor="location" className="col-sm-6 col-form-label">
            Location:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="location"
                {...register("location", {
                  required: {
                    value: true,
                    message: "location is required"
                  }
                })}
              />
            </div>
            <p>{errors.location?.message}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-6 col-form-label">
            Email:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required"
                  }
                })}
              />
            </div>
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="shift" className="col-sm-6 col-form-label">
            Shift:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="shift"
                placeholder="shift"
                {...register("shift", {
                  required: {
                    value: true,
                    message: "shift is required"
                  }
                })}
              />
            </div>
            <p>{errors.shift?.message}</p>
          </div>
         <div className="form-group row">
            <label htmlFor="emplyeetype" className="col-sm-6 col-form-label">
            Emplyee Type
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="emplyeetype"
                placeholder="emplyeetype"
                {...register("emplyeetype", {
                  required: {
                    value: true,
                    message: "emplyeetype is required"
                  }
                })}
              />
            </div>
            <p>{errors.emplyeetype?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="intershipdate" className="col-sm-6 col-form-label">
            Intership Date:
            </label>
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                id="intershipdate"
                placeholder="intershipdate"
                {...register("intershipdate", {
                  required: {
                    value: true,
                    message: "intershipdate is required"
                  }
                })}
              />
            </div>
            <p>{errors.intershipdate?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="dateofjoining" className="col-sm-6 col-form-label">
            Date of Joining:
            </label>
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                id="dateofjoining"
                placeholder="dateofjoining"
                {...register("dateofjoining", {
                  required: {
                    value: true,
                    message: "dateofjoining is required"
                  }
                })}
              />
            </div>
            <p>{errors.dateofjoining?.message}</p>
          </div>
          <div className="form-group row">
            <label htmlFor="dateofleaving" className="col-sm-6 col-form-label">
            Date of Leaving:
            </label>
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                id="dateofleaving"
                placeholder="dateofleaving"
                {...register("dateofleaving", {
                  required: {
                    value: true,
                    message: "dateofleaving is required"
                  }
                })}
              />
            </div>
            <p>{errors.dateofleaving?.message}</p>
          </div>
           <div className="form-group row">
            <label htmlFor="reasonforleaving" className="col-sm-6 col-form-label">
            Reason for Leaving:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="reasonforleaving"
                placeholder="reasonforleaving"
                {...register("reasonforleaving", {
                  required: {
                    value: true,
                    message: "reasonforleaving is required"
                  }
                })}
              />
            </div>
            <p>{errors.reasonforleaving?.message}</p>
          </div>
           <div className="form-group row">
            <label htmlFor="reference" className="col-sm-6 col-form-label">
            Reference:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="reference"
                placeholder="reference"
                {...register("reference", {
                  required: {
                    value: true,
                    message: "reference is required"
                  }
                })}
              />
            </div>
            <p>{errors.reference?.message}</p>
          </div>
        </div>
        </div>
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default App;
