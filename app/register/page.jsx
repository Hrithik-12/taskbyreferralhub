"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen bg-[#f5f8fe] grid place-items-center p-4 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
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
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-gray-700 font-medium">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="border-gray-300 focus:ring-blue-300 h-11"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  {showPassword ? 
                    <FiEyeOff className="h-5 w-5 text-gray-500" /> : 
                    <FiEye className="h-5 w-5 text-gray-500" />
                  }
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label className="text-gray-700 font-medium">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  {showConfirmPassword ? 
                    <FiEyeOff className="h-5 w-5 text-gray-500" /> : 
                    <FiEye className="h-5 w-5 text-gray-500" />
                  }
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
              className="accent-blue-500 h-4 w-4"
            />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <Link href="#" className="text-blue-500 hover:underline">Terms</Link> and{' '}
              <Link href="#" className="text-blue-500 hover:underline">Privacy Policy</Link>
            </Label>
          </div> */}

          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 h-11 font-medium">
            Create Account
          </Button>
          <div className="flex justify-center gap-6 pt-2">
            <Button variant="ghost" size="icon"><FcGoogle /></Button>
            <Button variant="ghost" size="icon"><FaFacebook className="text-blue-600" /></Button>
            <Button variant="ghost" size="icon"><FaXTwitter /></Button>
            <Button variant="ghost" size="icon"><FaLinkedin className="text-blue-700" /></Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline font-medium">
              Login now
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
