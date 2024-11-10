'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Lock, Mail, Sun, Moon, Atom } from 'lucide-react'

// interface LoginFormProps {
//   isOpen: boolean
//   onClose: () => void
// }

export function LoginForm({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempted with:', email, password)
    // After successful login, you might want to close the dialog
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to Your Account</DialogTitle>
          <DialogDescription>
            Enter your email and password to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#FFC300] text-[#4A0E4E] rounded-lg hover:bg-[#00A896] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:ring-opacity-50 font-semibold">Login</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}


//futuristic theme

// export function LoginForm({ isOpen, onClose }) {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
  
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       console.log('Login attempted with:', email, password)
//       onClose()
//     }
  
//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
//           <DialogHeader>
//             <DialogTitle className="text-3xl font-bold flex items-center justify-center">
//               <Atom className="w-8 h-8 mr-2 text-cyan-400 animate-spin-slow" />
//               Quantum Access
//             </DialogTitle>
//             <DialogDescription className="text-cyan-200">
//               Initiate your journey into the digital frontier.
//             </DialogDescription>
//           </DialogHeader>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email" className="text-cyan-300">Email Signature</Label>
//               <div className="relative">
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@quantumrealm.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="pl-10 bg-purple-800 bg-opacity-50 border-cyan-500 text-white placeholder-cyan-300 focus:border-cyan-400 focus:ring-cyan-400"
//                 />
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 h-5 w-5" />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password" className="text-cyan-300">Access Code</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="pl-10 bg-purple-800 bg-opacity-50 border-cyan-500 text-white placeholder-cyan-300 focus:border-cyan-400 focus:ring-cyan-400"
//                 />
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 h-5 w-5" />
//               </div>
//             </div>
//             <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold">
//               Initiate Quantum Link
//             </Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     )
//   }