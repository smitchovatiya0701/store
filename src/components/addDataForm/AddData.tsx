// "use client";
// import React, { useState } from "react";
// import Input from "../commoncomponent/inputField/Input";
// import { useFormik } from "formik";
// import Button from "../commoncomponent/button/Button";
// import toast from "react-hot-toast";
// import { ButtonData } from "../buttonData/buttonData";

// const AddData = () => {
//   const [submitedBtnName, setSubmitedBtnName] = useState<string | null>(null);
//   console.log(submitedBtnName);
//   // Formik initializationcl
//   const formik = useFormik({
//     initialValues: {
//       Name: "",
//       Address: "",
//       WhatsappNo: "",
//       MobileNo: "",
//       Note: "",
//     },
//     onSubmit: async (values) => {
//       const sheetId = process.env.NEXT_PUBLIC_SHEET_ID || "";
//       const formData = new FormData();
//       formData.append("Id", "1");
//       formData.append("Name", values.Name);
//       formData.append("Address", values.Address);
//       formData.append("MobileNo", values.MobileNo);
//       formData.append("WhatsappNo", values.WhatsappNo);
//       formData.append("Note", values.Note);
//       formData.append("sheetName", submitedBtnName || "");
//       formData.append("sheetId", sheetId);

//       try {
//         const response = await fetch(
//           "https://script.google.com/macros/s/AKfycbyZAqsv3YBzpdmgRV7J-u95VFrkGZxu0PH2DOnc1XH0kmFve561zPJuRiNXv05jYU3dAg/exec",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Response from Google Sheets:", data);
//         toast.success("Data added successfully!");
//       } catch (error) {
//         console.error("Error adding data:", error);
//         toast.error("Failed to add data. Please try again.");
//       }
//     },
//   });

//   return (
//     <div>
//       <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
//         <Input
//           label="Name"
//           id="name"
//           name="Name"
//           value={formik.values.Name}
//           placeholder="Name"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <Input
//           label="Address"
//           id="address"
//           name="Address"
//           value={formik.values.Address}
//           placeholder="Address"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <Input
//           label="WhatsApp Number"
//           id="whatsapp"
//           name="WhatsappNo"
//           value={formik.values.WhatsappNo}
//           placeholder="WhatsApp Number"
//           type="number"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <Input
//           label="Mobile Number"
//           id="mobileNumber"
//           name="MobileNo"
//           value={formik.values.MobileNo}
//           placeholder="Mobile Number"
//           type="number"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <div className="flex flex-col gap-3">
//           <label className="font-figtree text-xl font-medium text-black">
//             Note
//           </label>
//           <textarea
//             name="Note"
//             id="note"
//             rows={4}
//             value={formik.values.Note}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Add a note"
//             className="border  border-tertiary rounded-lg resize-none focus:outline-none p-5 placeholder:text-Gray  text-[13px] font-figtree lg:text-base font-medium leading-5"
//           />
//         </div>

//         <div className="flex gap-3 flex-wrap">
//           {ButtonData &&
//             ButtonData.map((item) => (
//               <Button
//                 key={item?.id}
//                 type="submit"
//                 buttonName={item?.ButtonName}
//                 handleClick={() => {
//                   setSubmitedBtnName(item?.SheetName);
//                 }}
//               />
//             ))}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddData;

"use client";
import React, { useState } from "react";
import Input from "../commoncomponent/inputField/Input";
import Button from "../commoncomponent/button/Button";
import toast from "react-hot-toast";
import { ButtonData } from "../buttonData/buttonData";

const AddData = () => {
  const [form, setValues] = useState({
    Name: "",
    Address: "",
    WhatsappNo: "",
    MobileNo: "",
    Note: "",
  });
  const [submitedBtnName, setSubmitedBtnName] = useState<string | null>(null);
  console.log(submitedBtnName);
  // Handler for form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sheetId = process.env.NEXT_PUBLIC_SHEET_ID || "";
    const formData = new FormData();
    formData.append("Id", "1");
    formData.append("Name", form.Name);
    formData.append("Address", form.Address);
    formData.append("MobileNo", form.MobileNo);
    formData.append("WhatsappNo", form.WhatsappNo);
    formData.append("Note", form.Note);
    formData.append("sheetName", submitedBtnName || "");
    formData.append("sheetId", sheetId);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyZAqsv3YBzpdmgRV7J-u95VFrkGZxu0PH2DOnc1XH0kmFve561zPJuRiNXv05jYU3dAg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from Google Sheets:", data);
      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Failed to add data. Please try again.");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          name="Name"
          value={form.Name}
          placeholder="Name"
          type="text"
          onChange={handleInputChange}
        />
        <Input
          label="Address"
          id="address"
          name="Address"
          value={form.Address}
          placeholder="Address"
          type="text"
          onChange={handleInputChange}
        />
        <Input
          label="WhatsApp Number"
          id="whatsapp"
          name="WhatsappNo"
          value={form.WhatsappNo}
          placeholder="WhatsApp Number"
          type="number"
          onChange={handleInputChange}
        />
        <Input
          label="Mobile Number"
          id="mobileNumber"
          name="MobileNo"
          value={form.MobileNo}
          placeholder="Mobile Number"
          type="number"
          onChange={handleInputChange}
        />
        <div className="flex flex-col gap-3">
          <label className="font-figtree text-xl font-medium text-black">
            Note
          </label>
          <textarea
            name="Note"
            id="note"
            rows={4}
            value={form.Note}
            onChange={handleInputChange}
            placeholder="Add a note"
            className="border border-tertiary rounded-lg resize-none focus:outline-none p-5 placeholder:text-Gray text-[13px] font-figtree lg:text-base font-medium leading-5"
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          {ButtonData &&
            ButtonData.map((item) => (
              <Button
                key={item?.id}
                type="submit"
                buttonName={item?.ButtonName}
                handleClick={() => {
                  setSubmitedBtnName(item?.SheetName);
                }}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default AddData;
