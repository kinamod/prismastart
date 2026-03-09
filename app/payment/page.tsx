'use client';

import {
  Button,
  PrismaProvider,
  Box,
  Flex,
  Card,
  Heading,
  Body,
  Glyph,
  Input,
  InnerLabel,
  Field,
} from '@edreamsodigeo/prisma-design-system';
import Link from 'next/link';
import { useState } from 'react';
import { enUS } from 'date-fns/locale';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment processing logic would go here
    alert('Payment submitted! (This is a demo)');
  };

  return (
    <PrismaProvider
      brand="ED"
      version="cobalt"
      currencyLocale="en"
      dateFnsLocale={enUS}
    >
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
        }}
      >
        {/* Header */}
        <Box
          as="header"
          sx={{
            background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
            color: 'white',
            padding: ['32px 24px', '48px 24px'],
            textAlign: 'center',
          }}
        >
          <Flex alignItems="center" justifyContent="center" sx={{ gap: '12px', marginBottom: '12px' }}>
            <Glyph category="Finances" name="Cards" size="large" />
            <Heading type={1} sx={{ margin: 0, color: 'white' }}>
              Payment
            </Heading>
          </Flex>
          <Body size="large" sx={{ margin: 0, opacity: 0.9, color: 'white' }}>
            Secure payment powered by Prisma Design System
          </Body>
        </Box>

        {/* Main Content */}
        <Box
          as="main"
          sx={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: ['32px 24px', '48px 24px'],
          }}
        >
          {/* Back Button */}
          <Box sx={{ marginBottom: '24px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">
                <Flex alignItems="center" sx={{ gap: '8px' }}>
                  <Glyph category="Arrows" name="Left" size="small" />
                  Back to Home
                </Flex>
              </Button>
            </Link>
          </Box>

          {/* Payment Form Card */}
          <Card sx={{ padding: '32px' }}>
            <Heading type={2} sx={{ margin: '0 0 24px 0' }}>
              Payment Details
            </Heading>

            <form onSubmit={handleSubmit}>
              <Flex flexDirection="column" sx={{ gap: '24px' }}>
                {/* Card Number */}
                <Field stateType="default">
                  <Input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                    required
                    label={<InnerLabel isEmpty={!cardNumber} stateType="default">Card Number</InnerLabel>}
                  />
                </Field>

                {/* Card Holder */}
                <Field stateType="default">
                  <Input
                    id="cardHolder"
                    type="text"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    required
                    label={<InnerLabel isEmpty={!cardHolder} stateType="default">Card Holder Name</InnerLabel>}
                  />
                </Field>

                {/* Expiry Date and CVV */}
                <Flex sx={{ gap: '16px' }}>
                  <Box sx={{ flex: 1 }}>
                    <Field stateType="default">
                      <Input
                        id="expiryDate"
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        maxLength={5}
                        required
                        label={<InnerLabel isEmpty={!expiryDate} stateType="default">Expiry Date</InnerLabel>}
                      />
                    </Field>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Field stateType="default">
                      <Input
                        id="cvv"
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={4}
                        required
                        label={<InnerLabel isEmpty={!cvv} stateType="default">CVV</InnerLabel>}
                      />
                    </Field>
                  </Box>
                </Flex>

                {/* Order Summary */}
                <Box
                  sx={{
                    marginTop: '16px',
                    padding: '16px',
                    background: '#f8fafc',
                    borderRadius: '8px',
                  }}
                >
                  <Heading type={4} sx={{ margin: '0 0 12px 0' }}>
                    Order Summary
                  </Heading>
                  <Flex justifyContent="space-between" sx={{ marginBottom: '8px' }}>
                    <Body>Subtotal</Body>
                    <Body>$299.00</Body>
                  </Flex>
                  <Flex justifyContent="space-between" sx={{ marginBottom: '8px' }}>
                    <Body>Tax</Body>
                    <Body>$29.90</Body>
                  </Flex>
                  <Box
                    sx={{
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid #e2e8f0',
                    }}
                  >
                    <Flex justifyContent="space-between">
                      <Body sx={{ fontWeight: 600 }}>Total</Body>
                      <Body sx={{ fontWeight: 600, fontSize: '18px' }}>$328.90</Body>
                    </Flex>
                  </Box>
                </Box>

                {/* Submit Button */}
                <Button variant="primary" type="submit" sx={{ width: '100%', marginTop: '8px' }}>
                  <Flex alignItems="center" justifyContent="center" sx={{ gap: '8px' }}>
                    <Glyph category="UIActions" name="Check" size="small" />
                    Complete Payment
                  </Flex>
                </Button>
              </Flex>
            </form>
          </Card>

          {/* Security Note */}
          <Flex
            alignItems="center"
            justifyContent="center"
            sx={{ gap: '8px', marginTop: '24px', color: '#64748b' }}
          >
            <Glyph category="Alerts" name="WarningShield" size="small" color="#64748b" />
            <Body size="small">Your payment information is secure and encrypted</Body>
          </Flex>
        </Box>
      </Box>
    </PrismaProvider>
  );
}
