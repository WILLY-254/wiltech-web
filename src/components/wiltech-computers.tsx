/* eslint-disable */

'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Laptop, Mail, MapPin, Monitor, Phone, ShoppingBag, Smartphone, Wrench } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function WiltechComputers() {
  const [activeTab, setActiveTab] = useState('home')
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    { icon: <Laptop className="w-12 h-12" />, title: 'Hardware Repair', description: 'Expert repair for all computer hardware issues:screen,keyboard,hinges.' },
    { icon: <Wrench className="w-12 h-12" />, title: 'Software Repair', description: 'Fixing software problems and removing viruses,inncluding phone flashing.' },
    { icon: <Download className="w-12 h-12" />, title: 'Software Installation', description: 'Installation and setup of various software applications: windows,office ad more others.' },
    { icon: <Smartphone className="w-12 h-12" />, title: 'Phone Repair', description: 'Professional repair for various phone models and issues:OS,screen.' },
    { icon: <ShoppingBag className="w-12 h-12" />, title: 'Accessories & Sales', description: 'Wide range of computer accessories and new systems for saleSCREEN KEYBOARD,CHARGER,SPEAKERS,F.CABLES.CMOS.' },
    { icon: <Monitor className="w-12 h-12" />, title: 'Computer Sales', description: 'New and refurbished computers for every need and budget.' },
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  const carouselImages = [
    // '/comp-1.jpeg',
    // '/phone-1.jpeg',
    // '/anguka-nayo.jpeg',

  {
    name:
    '/anguka-nayo.jpeg',
    width:649,
    height:624

  },  {
    name:
    '/phone-1.jpeg',
    width:1001,
    height:1500

  },{
    name:
    '/comp-1.jpeg',
    width:1001,
    height:1500
  },
  {
    name:
    '/logo.jpeg',
    width:1001,
    height:1500
  },
  {
    name:
    '/supermarket.jpeg',
    width:1001,
    height:1500
  }
  ]

  const teamMembers = [
    { name: 'Willy Manyara', role: 'Founder & CEO', image: '/logo.jpeg' },
    { name: 'Mike Mutua', role: 'Lead Technician', image: '/mutua.jpg' },
    { name: 'Gift Mukami', role: 'Sales Manager', image: '/gift.jpeg' },
    { name: 'Developer Gerison', role: 'Customer Support', image: '/gerison.jpeg' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center sm:justify-start"
            >
              <Image src="/logo-white.jpeg" alt="Wiltech Computers Logo" width={60} height={60} className="mr-2 rounded-full" />
              <h1 className="text-2xl font-bold text-blue-600">Wiltech Computers</h1>
            </motion.div>
            <nav className="mt-4 sm:mt-0">
              <ul className="flex flex-wrap justify-center sm:space-x-4">
                {['home', 'about', 'services', 'team', 'contact', 'hours'].map((item) => (
                  <motion.li key={item} className="mx-2 my-1 sm:mx-0 sm:my-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab(item)}
                      className={activeTab === item ? "text-blue-600" : ""}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as string)} className="w-full">
              <TabsContent value="home">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome to Wiltech Computers</CardTitle>
                    <CardDescription>Your one-stop solution for all computer needs at Baraton University</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-full sm:h-[400px]  rounded-lg mb-6">
                      {carouselImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: index === currentSlide ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image 
                          className='h-[400px] max-w-[400px] mx-auto'
                          
                          height={image.height}
                          width={image.width}
                          src={image.name} alt={`Slide ${index + 1}`} objectFit="scale-down" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold">Why Choose Wiltech Computers?</h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Expert technicians with years of experience on mobile phone and computers</li>
                        <li>Fast and reliable service for all your computer needs</li>
                        <li>Competitive pricing and student discounts</li>
                        <li>Conveniently located on Baraton University campus</li>
                        <li>door-to-door timely service delivery around Baraton and country wide</li>
                        <li>Wide range of services from repairs to new computer sales</li>
                      </ul>
                      <p className="text-lg">
                        Visit us today and experience the Wiltech difference. We're here to keep your technology running smoothly!
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setActiveTab('contact')}>Contact Us Now</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About Wiltech Computers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Wiltech Computers is your trusted partner for all computer and technology needs at Baraton University. 
                        With years of experience and a dedicated team of experts, we provide top-notch services to keep your devices running smoothly.
                      </p>
                      <h3 className="text-xl font-semibold">Our Mission</h3>
                      <p>
                        To provide reliable, efficient, and affordable technology solutions to the Baraton University community, 
                        empowering students and faculty with the tools they need to succeed in the digital age.
                      </p>
                      <h3 className="text-xl font-semibold">Our History</h3>
                      <p>
                        Founded in 2022 by a Baraton University alumnus, Wiltech Computers has grown from a small 
                        repair shop to a full-service technology center. We've helped thousands of students and faculty members over 
                        the years in fixing mobile phone and computer services continuously adapting our services to meet the evolving needs of the academic community.
                      </p>
                      <h3 className="text-xl font-semibold">Our Commitment</h3>
                      <p>
                        At Wiltech Computers, we're committed to:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Providing honest and transparent service</li>
                        <li>Staying up-to-date with the latest technology trends</li>
                        <li>Offering personalized solutions for each customer's unique needs</li>
                        <li>Supporting the Baraton University community through technology education and outreach programs</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setActiveTab('team')}>Meet Our Team</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              {service.icon}
                              <span className="ml-2">{service.title}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>{service.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {teamMembers.map((member, index) => (
                        <Card key={index}>
                          <CardContent className="flex flex-col items-center p-4">
                            <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mb-4" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <textarea id="message" className="w-full p-2 border rounded" rows={4} placeholder="Your message"></textarea>
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+2547 17 405 214</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>wiltechcomputerssolution@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Baraton University, Kenya</span>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="hours">
                <Card>
                  <CardHeader>
                    <CardTitle>Working Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {workingHours.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-blue-600 text-white mt-auto">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Wiltech Computers. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}