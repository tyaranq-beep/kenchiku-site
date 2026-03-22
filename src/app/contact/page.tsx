"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { QrCode } from "lucide-react";

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
  constructionType: z.string().min(1, { message: "工事種別を選択してください。" }),
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
      constructionType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("お問い合わせを受け付けました。");
    form.reset();
  }

  return (
    <div className="w-full relative min-h-screen pb-24 z-10 grid-pattern">
      {/* Page Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-surface-container-low" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#d4a843] tracking-widest mb-6"
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
            専門家へのお問い合わせ
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
                          <Input placeholder="建築 太郎" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843]" {...field} />
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
                          <Input placeholder="株式会社○○" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843]" {...field} />
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
                            <Input type="email" placeholder="example@domain.com" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843]" {...field} />
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
                            <Input type="tel" placeholder="03-XXXX-XXXX" className="bg-surface-container-highest border-border/20 rounded-none h-12 focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Construction Type Select */}
                  <FormField
                    control={form.control}
                    name="constructionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">工事種別 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <div className="relative">
                            <select 
                              className="flex h-12 w-full border border-border/20 bg-surface-container-highest px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843] appearance-none" 
                              {...field}
                            >
                              <option value="" disabled>選択してください</option>
                              <option value="新築・建築工事">新築・建築工事</option>
                              <option value="外壁・屋根工事">外壁・屋根工事</option>
                              <option value="リフォーム・改修">リフォーム・改修</option>
                              <option value="足場・仮設工事">足場・仮設工事</option>
                              <option value="造園・外構工事">造園・外構工事</option>
                              <option value="解体・土木工事">解体・土木工事</option>
                              <option value="空調・設備工事">空調・設備工事</option>
                              <option value="その他">その他</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-foreground/50">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-sans tracking-widest text-xs">お問い合わせ内容 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="具体的なご相談内容をご記入ください" 
                            className="bg-surface-container-highest border-border/20 rounded-none min-h-[200px] resize-y focus-visible:ring-[#d4a843] focus-visible:border-[#d4a843]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full h-14 rounded-none bg-[#d4a843] text-[#061423] font-sans font-bold tracking-widest text-sm hover:bg-white transition-colors duration-500 mt-8">
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
              <h2 className="text-2xl font-serif text-foreground tracking-widest mb-10">オフィス情報</h2>
              
              <div className="space-y-8 font-sans text-sm text-foreground/80 mb-12">
                <div>
                  <h3 className="text-[#d4a843] text-xs tracking-widest uppercase mb-2">所在地</h3>
                  <p className="leading-relaxed">〒107-0062<br/>東京都港区南青山 5-10-23<br/>MONOLITH BLDG 4F</p>
                </div>
                
                <div>
                  <h3 className="text-[#d4a843] text-xs tracking-widest uppercase mb-2">直通ダイヤル</h3>
                  <p className="text-foreground text-[20px] font-medium tracking-wider">03-XXXX-XXXX</p>
                </div>

                <div>
                  <h3 className="text-[#d4a843] text-xs tracking-widest uppercase mb-2">メールアドレス</h3>
                  <p className="tracking-wide">info@monolith-silk.arch</p>
                </div>

                <div>
                  <h3 className="text-[#d4a843] text-xs tracking-widest uppercase mb-2">営業時間</h3>
                  <p className="tracking-wide">平日 9:00〜18:00（土日祝休）</p>
                </div>
              </div>

              {/* Official LINE Banner */}
              <div className="bg-[#1b2d40] border border-border/10 p-8 text-center flex flex-col items-center">
                  <div className="mb-6">
                    <QrCode className="w-[60px] h-[60px] text-[#d4a843]" />
                  </div>
                  <h3 className="text-foreground font-sans font-bold text-sm tracking-widest mb-4">公式 LINE</h3>
                  <p className="text-foreground/70 font-sans text-xs leading-relaxed max-w-[200px] mx-auto">
                    QRコードをスキャンしてLINEでのお問い合わせも承っております。
                  </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
