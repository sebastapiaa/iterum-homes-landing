"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData } from "@/lib/validations";

export default function Hero() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Submission failed");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-pattern"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span> San Diego&apos;s Trusted Cash Buyer
          </div>
          <h1>
            Sell Your Home <em>Fast for Cash</em> — No Hassle
          </h1>
          <p className="hero-desc">
            We buy houses in any condition across San Diego County. No repairs, no agents, no fees. Get a fair cash offer and close on your timeline.
          </p>
          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary">
              Get My Cash Offer
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="tel:6194732033" className="btn-outline">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call (619) 473-2033
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>200+</h3>
              <p>Homes Purchased</p>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <h3>14 Day</h3>
              <p>Average Close</p>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <h3>$0</h3>
              <p>Fees &amp; Commissions</p>
            </div>
          </div>
        </div>

        <div className="hero-form-card" id="contact">
          {status === "success" ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="form-title">You&apos;re all set!</h3>
              <p>We received your info. One of our buyers will reach out within 24 hours with a no-obligation cash offer.</p>
            </div>
          ) : (
            <>
              <h3 className="form-title">How Much Is Your Home Worth?</h3>
              <p className="form-subtitle">Get a no-obligation cash offer within 24 hours.</p>
              {status === "error" && <div className="form-error-banner">{errorMsg || "Something went wrong. Please try again or call us directly."}</div>}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="John Doe" {...register("name")} />
                  {errors.name && <span className="field-error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="john@email.com" {...register("email")} />
                  {errors.email && <span className="field-error">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="(619) 000-0000" {...register("phone")} />
                  {errors.phone && <span className="field-error">{errors.phone.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="propertyAddress">Property Address</label>
                  <input id="propertyAddress" type="text" placeholder="123 Main St, San Diego, CA" {...register("propertyAddress")} />
                  {errors.propertyAddress && <span className="field-error">{errors.propertyAddress.message}</span>}
                </div>
                <button type="submit" className="form-submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Get My Free Cash Offer →"}
                </button>
                <p className="form-note">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  No obligation. Your info is 100% confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
