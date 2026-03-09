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
      <Box>
        {/* Header */}
        <Box as="header">
          <Flex alignItems="center" justifyContent="center">
            <Glyph category="Finances" name="Cards" size="large" />
            <Heading type={1}>
              Payment
            </Heading>
          </Flex>
          <Body size="large">
            Secure payment powered by Prisma Design System
          </Body>
        </Box>

        {/* Main Content */}
        <Box as="main">
          {/* Back Button */}
          <Box mb={4}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">
                <Flex alignItems="center">
                  <Glyph category="Arrows" name="Left" size="small" />
                  <Box ml={2}>Back to Home</Box>
                </Flex>
              </Button>
            </Link>
          </Box>

          {/* Payment Form Card */}
          <Card p={4}>
            <Box mb={4}>
              <Heading type={2}>
                Payment Details
              </Heading>
            </Box>

            <form onSubmit={handleSubmit}>
              <Flex flexDirection="column">
                {/* Card Number */}
                <Box mb={4}>
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
                </Box>

                {/* Card Holder */}
                <Box mb={4}>
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
                </Box>

                {/* Expiry Date and CVV */}
                <Box mb={4}>
                  <Flex>
                    <Box flex={1} mr={2}>
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

                    <Box flex={1} ml={2}>
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
                </Box>

                {/* Order Summary */}
                <Box mt={3} p={3}>
                  <Box mb={2}>
                    <Heading type={4}>
                      Order Summary
                    </Heading>
                  </Box>
                  <Flex justifyContent="space-between">
                    <Body>Subtotal</Body>
                    <Body>$299.00</Body>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Body>Tax</Body>
                    <Body>$29.90</Body>
                  </Flex>
                  <Box mt={2} pt={2}>
                    <Flex justifyContent="space-between">
                      <Body>Total</Body>
                      <Body>$328.90</Body>
                    </Flex>
                  </Box>
                </Box>

                {/* Submit Button */}
                <Box mt={2}>
                  <Button variant="primary" type="submit">
                    <Flex alignItems="center" justifyContent="center">
                      <Glyph category="UIActions" name="Check" size="small" />
                      <Box ml={2}>Complete Payment</Box>
                    </Flex>
                  </Button>
                </Box>
              </Flex>
            </form>
          </Card>

          {/* Security Note */}
          <Box mt={4}>
            <Flex alignItems="center" justifyContent="center">
              <Glyph category="Alerts" name="WarningShield" size="small" />
              <Box ml={2}>
                <Body size="small">Your payment information is secure and encrypted</Body>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </PrismaProvider>
  );
}
