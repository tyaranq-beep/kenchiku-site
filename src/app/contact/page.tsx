"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: "お名前は2文字以上で入力してください。" }),
  company: z.string().optional(),
  email: z.string().email({ message: "有効なメールアドレスを入力してください。" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "お問い合わせ内容は10文字以上で入力してください。" }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("お問い合わせを受け付けました。");
    form.reset();
  }

  return (
    <div className="w-full relative min-h-screen pb-24 z-10">
      {/* Page Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-surface-container-low" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary tracking-widest mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            お問い合わせ
          </motion.h1>
          <motion.p 
            className="text-foreground/80 font-sans tracking-[0.2em] text-xs md:text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            REACH OUT TO OUR EXPERTS
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
              className="bg-surface-container-low p-8 md:p-12 border border-border/10 shadow-lg"
            >
              <h2 className="text-2xl font-serif text-foreground mb-8">ご相談・お問い合わせ</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">お名前 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="建築 太郎" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">会社名・組織名 <span className="text-foreground/40 pb-1">(任意)</span></FormLabel>
                        <FormControl>
                          <Input placeholder="株式会社○○" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">メールアドレス <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="example@domain.com" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">電話番号 <span className="text-foreground/40 pb-1">(任意)</span></FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="03-XXXX-XXXX" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">お問い合わせ内容 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="具体的なご相談内容をご記入ください" 
                            className="bg-surface-container-highest border-border/20 rounded-none min-h-[200px] resize-y focus-visible:ring-primary focus-visible:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full h-14 rounded-none bg-primary text-primary-foreground font-sans font-bold tracking-widest text-sm hover:bg-white transition-colors duration-500 mt-8">
                    送信する
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-surface-container-low border border-border/10 p-8 md:p-12 h-fit lg:sticky lg:top-32"
            >
              <h2 className="text-xl font-serif text-primary tracking-widest mb-8 uppercase">本社</h2>
              
              <div className="space-y-6 font-sans text-sm text-foreground/80 mb-12">
                <div>
                  <p className="font-bold text-foreground mb-2">株式会社モノリス＆シルク デモ</p>
                  <p>〒000-0000</p>
                  <p>東京都〇〇区〇〇1-2-3</p>
                  <p>デモビル 99F</p>
                </div>
                
                <div className="pt-4 border-t border-border/10">
                  <p className="mb-2"><span className="text-primary font-bold mr-4">T.</span> 00-0000-0000</p>
                  <p><span className="text-primary font-bold mr-4">E.</span> info@monolith-silk.demo</p>
                </div>
              </div>

              {/* LINE Banner */}
              <div className="mb-12">
                <div className="bg-[#06C755]/10 border border-[#06C755]/30 p-8 text-center hover:bg-[#06C755]/20 transition-colors duration-300 cursor-pointer flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,199,85,0.4)]">
                    <span className="text-white font-bold text-xl leading-none">L</span>
                  </div>
                  <p className="text-[#06C755] font-sans font-bold text-sm tracking-widest mb-2">LINEでのご相談はこちら</p>
                  <p className="text-foreground/60 font-sans text-xs">QRコードをスキャンして友だち追加</p>
                </div>
              </div>

              {/* Dark Map Placeholder */}
              <div className="relative w-full aspect-[4/3] bg-surface-container-highest border border-border/20 overflow-hidden cursor-pointer group">
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  fill 
                  alt="Map Location" 
                  className="object-cover opacity-50 grayscale contrast-125 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <span className="text-primary font-sans text-xs tracking-widest font-bold bg-background/90 px-6 py-3 border border-primary/30 shadow-2xl">
                    マップで見る
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
