import Button from "./Button";
import { usePersonalInfo } from "../context/PersonalInfoContext";
function PersonalInfo() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isValidEmail,
    isValidPhone,
  } = usePersonalInfo();
  return (
    <div className="step">
      <h1>Personal info</h1>
      <p className="description">
        Please provide your name, email address, and phone number.
      </p>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              {...register("name", {
                required: "Please enter your name",
              })}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: isValidEmail,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </label>
          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="only egyptian phone number"
              id="phone"
              {...register("phone", {
                required: "Please enter your phone",
                pattern: {
                  value: isValidPhone,
                  message: "invalid Phone Number",
                },
              })}
            />
            {errors.phone && (
              <span className="error">{errors.phone.message}</span>
            )}
          </label>
        </div>
        <div className="btns next">
          <Button action="click" styling="next">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
