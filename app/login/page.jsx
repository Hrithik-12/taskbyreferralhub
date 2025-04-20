'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Dummy credentials
const DUMMY_USER = {
  email: "demo@referralhub.com",
  password: "demo123"
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    if(formData.email === DUMMY_USER.email && formData.password === DUMMY_USER.password){
      router.push("/dashboard");
    } else {
      setIsLoading(false);
      setError("Invalid credentials. Use demo@referralhub.com / demo123");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-[#f5f8fe] grid place-items-center p-4 relative"
    >
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />
      <Card className="w-full max-w-md bg-white relative shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center text-gray-800">
            Login to ReferralHub
          </CardTitle>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button
            variant="outline"
            className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <FcGoogle className="mr-2" />
            Continue with Google/Microsoft
          </Button>

          <div className="flex flex-col space-y-2">
            <Label className="text-gray-700">Magic Link Login</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-gray-300 focus:ring-blue-300"
            />
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
              Send Magic Link
            </Button>
          </div>

          <Separator className="bg-gray-300" />

          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-700">Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="demo@referralhub.com"
                className="border-gray-300 focus:ring-blue-300"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-700">Password</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="demo123"
                className="border-gray-300 focus:ring-blue-300"
                required
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData(prev => ({ ...prev, rememberMe: checked }))
                  }
                  className="accent-blue-500"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember Me
                </Label>
              </div>
              <Button variant="link" className="p-0 h-auto text-blue-500">
                Forgot password?
              </Button>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <div className="flex justify-center gap-6 pt-2">
            <Button variant="ghost" size="icon">
              <FcGoogle />
            </Button>
            <Button variant="ghost" size="icon">
              <FaFacebook className="text-blue-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <FaXTwitter />
            </Button>
            <Button variant="ghost" size="icon">
              <FaLinkedin className="text-blue-700" />
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600 pt-1">
            Don't have an account?{" "}
            <Button variant="link" className="p-0 h-auto text-blue-500">
              <Link href={"/register"}>Register now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}