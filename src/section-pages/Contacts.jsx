// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   FloatingLabel,
// } from "react-bootstrap";
// import emailjs from "emailjs-com";
// import { useState } from "react";

// export default function ContactComponent() {
//   const [myDetail, myDetailChange] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const send_mail = async (e) => {
//     e.preventDefault();
//     if (myDetail.name === "") {
//       alert("Please fill out name field!");
//     } else if (myDetail.email === "") {
//       alert("Please fill out email field!");
//     } else if (!myDetail.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
//       alert("Invalid email!");
//     } else if (!myDetail.phone.match(/^\d{11}$/)) {
//       alert("Invalid phone number!");
//     } else {
//       const params = {
//         name: myDetail.name,
//         email: myDetail.email,
//         phone: myDetail.phone,
//         message: myDetail.message,
//       };
//       const service_id = "service_63v6pqp";
//       const temp_id = "template_4w4cd6l";

//       try {
//         const response = await emailjs.send(service_id, temp_id, params);
//         myDetailChange({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//         console.log(response);
//         alert("Message sent successfully!");
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   // Initialize emailjs library
//   emailjs.init("L9fohElk4IBBLQ7KR");

//   return (
//     <>
//       <div id="Contacts"></div>
//       <div style={{ height: "max-content", background: "rgb(97 96 96 / 80%)" }}>
//         <Container>
//           <div className="page_title">
//             <h1 className="title">Contact Me</h1>
//             <p className="title_sub">get in touch</p>
//           </div>
//           <hr className="line" />
//           <Row
//             className="justify-content-between"
//             style={{ maxWidth: "1300px", padding: "0 80px", margin: "auto" }}
//           >
//             <Col md={5}>
//               <h3 className="text_shadow">Get in Touch</h3>
//               <hr
//                 style={{
//                   marginTop: "0",
//                   backgroundColor: "rgb(53, 52, 52)",
//                   height: "2px",
//                 }}
//               />
//               <p className="white">
//                 "Thank you for visiting my portfolio! If you have any questions
//                 or would like to discuss a project, please don't hesitate to get
//                 in touch with me. You can reach me through the contact form on
//                 this website, or by sending me an email directly. I look forward
//                 to hearing from you!"
//               </p>
//               <div>
//                 <Row className="mt-1 ml-3">
//                   <Col>
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         textShadow: "1px 1px #abab60",
//                       }}
//                     >
//                       name:
//                     </div>
//                     <h6 className="mb-2">Reymundo M. Francisco</h6>
//                   </Col>
//                 </Row>
//                 <Row className="mt-1 ml-3">
//                   <Col>
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         textShadow: "1px 1px #abab60",
//                       }}
//                     >
//                       address:
//                     </div>
//                     <h6 className="mb-2">Lower Bicutan, Taguig City</h6>
//                   </Col>
//                 </Row>
//                 <Row className="mt-1 ml-3">
//                   <Col>
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         textShadow: "1px 1px #abab60",
//                       }}
//                     >
//                       email:
//                     </div>
//                     <h6 className="mb-2">rfranciscobscs@tfvc.edu.ph</h6>
//                   </Col>
//                 </Row>
//                 <Row className="mt-1 ml-3">
//                   <Col className="mb-5">
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         textShadow: "1px 1px #abab60",
//                       }}
//                     >
//                       mobile:
//                     </div>
//                     <h6 className="mb-5">+63 931 782 0315</h6>
//                   </Col>
//                 </Row>
//               </div>
//             </Col>

//             <Col md={5}>
//               <h3 className="text_shadow">Message me</h3>
//               <hr
//                 style={{
//                   marginTop: "0",
//                   backgroundColor: "rgb(53, 52, 52)",
//                   height: "2px",
//                 }}
//               />
//               <Form>
//                 <Row className="mb-3">
//                   <Col>
//                     <FloatingLabel label="Name" className="mt-2">
//                       <Form.Control
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         value={myDetail.name}
//                         onChange={(e) =>
//                           myDetailChange({ ...myDetail, name: e.target.value })
//                         }
//                         autoComplete="off"
//                         required
//                       />{" "}
//                     </FloatingLabel>
//                   </Col>
//                   <Col>
//                     <FloatingLabel label="Email" className="mt-2">
//                       <Form.Control
//                         type="email"
//                         placeholder="Email"
//                         name="email"
//                         value={myDetail.email}
//                         onChange={(e) =>
//                           myDetailChange({ ...myDetail, email: e.target.value })
//                         }
//                         autoComplete="off"
//                         required
//                       />{" "}
//                     </FloatingLabel>
//                   </Col>
//                 </Row>
//                 <FloatingLabel label="Phone" className="mt-2">
//                   <Form.Control
//                     className="mb-3"
//                     type="text"
//                     placeholder="Phone"
//                     name="phone"
//                     value={myDetail.phone}
//                     onChange={(e) =>
//                       myDetailChange({ ...myDetail, phone: e.target.value })
//                     }
//                     autoComplete="off"
//                   />
//                 </FloatingLabel>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   placeholder="message"
//                   className="mb-3"
//                   name="message"
//                   value={myDetail.message}
//                   onChange={(e) =>
//                     myDetailChange({ ...myDetail, message: e.target.value })
//                   }
//                   autoComplete="off"
//                 />
//                 <Button
//                   type="submit"
//                   variant="warning"
//                   className="text-light btn-lg mb-5"
//                   onClick={send_mail}
//                 >
//                   Send
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }
