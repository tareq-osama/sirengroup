"use client"

import { useCallback } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export const useGTM = () => {
  const pushToDataLayer = useCallback((event: any) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event)
      console.log('GTM Event Pushed:', event) // For debugging
    }
  }, [])

  const trackEvent = useCallback((eventName: string, parameters?: any) => {
    pushToDataLayer({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...parameters,
    })
  }, [pushToDataLayer])

  const trackPageView = useCallback((path: string, title?: string) => {
    pushToDataLayer({
      event: 'page_view',
      page_path: path,
      page_title: title || document.title,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackButtonClick = useCallback((buttonName: string, section?: string, url?: string) => {
    pushToDataLayer({
      event: 'button_click',
      button_name: buttonName,
      section: section || 'unknown',
      click_url: url,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackFormSubmit = useCallback((formName: string, success: boolean, errorMessage?: string) => {
    pushToDataLayer({
      event: 'form_submit',
      form_name: formName,
      success: success,
      error_message: errorMessage,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackSignUp = useCallback((method: string, plan?: string) => {
    pushToDataLayer({
      event: 'sign_up',
      method: method,
      plan: plan,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackPurchase = useCallback((value: number, currency: string, plan: string, transactionId?: string) => {
    pushToDataLayer({
      event: 'purchase',
      value: value,
      currency: currency,
      plan: plan,
      transaction_id: transactionId,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackTrialStart = useCallback((plan: string, source: string) => {
    pushToDataLayer({
      event: 'trial_start',
      plan: plan,
      source: source,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackDemoRequest = useCallback((source: string, type?: string) => {
    pushToDataLayer({
      event: 'demo_request',
      source: source,
      demo_type: type || 'video',
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackNewsletterSignup = useCallback((source: string, email?: string) => {
    pushToDataLayer({
      event: 'newsletter_signup',
      source: source,
      has_email: !!email,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  const trackPricingView = useCallback((plan: string, price: number) => {
    pushToDataLayer({
      event: 'pricing_view',
      plan: plan,
      price: price,
      timestamp: new Date().toISOString(),
    })
  }, [pushToDataLayer])

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmit,
    trackSignUp,
    trackPurchase,
    trackTrialStart,
    trackDemoRequest,
    trackNewsletterSignup,
    trackPricingView,
  }
}