// "use client";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { registerUser } from "../libapi/api"; // Fixed the import from next/link to next/navigation

// export default function RegisterPage() {
//   const router = useRouter(); // Now this will work correctly
//   const [formData, setFormData] = useState({
//     email: "",
//     fullName: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     role: "BusinessOwner"
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const { email, fullName, phone, password, confirmPassword, role } = formData;

//   //   if (!email || !fullName || !phone || !password || !confirmPassword) {
//   //     return setMessage({ type: "error", text: "All fields are required." });
//   //   }

//   //   if (password !== confirmPassword) {
//   //     return setMessage({ type: "error", text: "Passwords do not match." });
//   //   }

//   //   setLoading(true);
//   //   setMessage(null);

//   //   try {
//   //     const res = await fetch("http://34.10.166.233/auth/register", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         email,
//   //         password,
//   //         role,
//   //         full_name: fullName,
//   //         phone,
//   //       }),
//   //     });

//   //     const data = await res.json();

//   //     if (!res.ok) {
//   //       // Extract error message from API response
//   //       const errorMessage = data.detail || data.message || "Registration failed.";
//   //       throw new Error(errorMessage);
//   //     }

//   //     // Store JWT token if provided
//   //     if (data.token) {
//   //       localStorage.setItem("token", data.token);
//   //     }

//   //     setMessage({ type: "success", text: "Account created successfully!" });
//   //     // Redirect to dashboard after successful registration
//   //     router.push('/dashboard');
//   //   } catch (err) {
//   //     console.error("Registration error:", err);
//   //     setMessage({ type: "error", text: err.message });
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await registerUser({
//         email,
//         password,
//         role,
//         full_name: fullName,
//         phone,
//       });
  
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//       }
  
//       setMessage({ type: "success", text: "Account created successfully!" });
//       router.push("/dashboard");
//     } catch (err) {
//       setMessage({ type: "error", text: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="h-screen bg-[#f5f8fe] grid place-items-center p-4 relative">
//       {message && (
//         <div
//           className={`text-sm text-center ${
//             message.type === "error" ? "text-red-600" : "text-green-600"
//           }`}
//         >
//           {message.text}
//         </div>
//       )}

//       <div
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       />

//       <Card className="w-full max-w-md bg-white relative shadow-lg">
//         <CardHeader className="pb-4">
//           <CardTitle className="text-2xl text-center text-gray-800 font-semibold">
//             Create Account
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col space-y-6">
//           <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//             <div className="flex flex-col space-y-5">
//               <div className="flex flex-col space-y-1.5">
//                 <Label className="text-gray-700 font-medium" htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   placeholder="John Doe"
//                   className="border-gray-300 focus:ring-blue-300 h-11"
//                 />
//               </div>

//               <div className="flex flex-col space-y-1.5">
//                 <Label className="text-gray-700 font-medium" htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="text"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="+91-9876543210"
//                   className="border-gray-300 focus:ring-blue-300 h-11"
//                 />
//               </div>

//               <div className="flex flex-col space-y-1.5">
//                 <Label className="text-gray-700 font-medium" htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="john.doe@example.com"
//                   className="border-gray-300 focus:ring-blue-300 h-11"
//                 />
//               </div>

//               <div className="flex flex-col space-y-1.5">
//                 <Label className="text-gray-700 font-medium" htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     placeholder="Create a password"
//                     className="border-gray-300 focus:ring-blue-300 h-11 pr-10"
//                   />
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <FiEyeOff className="h-5 w-5 text-gray-500" />
//                     ) : (
//                       <FiEye className="h-5 w-5 text-gray-500" />
//                     )}
//                   </Button>
//                 </div>
//               </div>

//               <div className="flex flex-col space-y-1.5">
//                 <Label className="text-gray-700 font-medium" htmlFor="confirmPassword">
//                   Confirm Password
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     placeholder="Confirm your password"
//                     className="border-gray-300 focus:ring-blue-300 h-11 pr-10"
//                   />
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? (
//                       <FiEyeOff className="h-5 w-5 text-gray-500" />
//                     ) : (
//                       <FiEye className="h-5 w-5 text-gray-500" />
//                     )}
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-blue-500 text-white hover:bg-blue-600 h-11 font-medium"
//               disabled={loading}
//             >
//               {loading ? "Creating..." : "Create Account"}
//             </Button>

//             <div className="flex justify-center gap-6 pt-2">
//               <Button variant="ghost" size="icon" type="button">
//                 <FcGoogle />
//               </Button>
//               <Button variant="ghost" size="icon" type="button">
//                 <FaFacebook className="text-blue-600" />
//               </Button>
//               <Button variant="ghost" size="icon" type="button">
//                 <FaXTwitter />
//               </Button>
//               <Button variant="ghost" size="icon" type="button">
//                 <FaLinkedin className="text-blue-700" />
//               </Button>
//             </div>

//             <div className="text-center text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="text-blue-500 hover:underline font-medium"
//               >
//                 Login now
//               </Link>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { registerUser } from "../libapi/api";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "BusinessOwner",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, fullName, phone, password, confirmPassword, role } = formData;
    if (!email || !fullName || !phone || !password || !confirmPassword) {
      return setMessage({ type: "error", text: "All fields are required." });
    }
    if (password !== confirmPassword) {
      return setMessage({ type: "error", text: "Passwords do not match." });
    }
    setLoading(true);
    setMessage(null);
    try {
      const data = await registerUser({
        email,
        password,
        role,
        full_name: fullName,
        phone,
      });
      if (data.token) localStorage.setItem("token", data.token);
      setMessage({ type: "success", text: "Account created successfully!" });
      router.push("/dashboard");
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#f5f8fe] grid place-items-center p-4 relative">
      {message && (
        <div
          className={`text-sm text-center ${
            message.type === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {message.text}
        </div>
      )}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <Card className="w-full max-w-md bg-white relative shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl text-center text-gray-800 font-semibold">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullName" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="border-gray-300 focus:ring-blue-300 h-11"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91-9876543210"
                  className="border-gray-300 focus:ring-blue-300 h-11"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="border-gray-300 focus:ring-blue-300 h-11"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role" className="text-gray-700 font-medium">
                  Role
                </Label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:ring-blue-300 h-11 px-3 rounded"
                >
                  <option value="BusinessOwner">Business Owner</option>
                  <option value="Customer">Customer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="border-gray-300 focus:ring-blue-300 h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff className="h-5 w-5 text-gray-500" /> : <FiEye className="h-5 w-5 text-gray-500" />}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="border-gray-300 focus:ring-blue-300 h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff className="h-5 w-5 text-gray-500" /> : <FiEye className="h-5 w-5 text-gray-500" />}
                  </Button>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 h-11 font-medium"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </Button>
            <div className="flex justify-center gap-6 pt-2">
              <Button variant="ghost" size="icon" type="button"><FcGoogle /></Button>
              <Button variant="ghost" size="icon" type="button"><FaFacebook className="text-blue-600" /></Button>
              <Button variant="ghost" size="icon" type="button"><FaXTwitter /></Button>
              <Button variant="ghost" size="icon" type="button"><FaLinkedin className="text-blue-700" /></Button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline font-medium">
                Login now
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
