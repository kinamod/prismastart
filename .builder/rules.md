# Prisma Design System Rules

## Critical: NO `sx` or `className` Props

**NEVER use `sx` or `className` props.** Use only standard Prisma Design System props.

### ❌ Wrong
```tsx
<Box sx={{ marginBottom: '24px', padding: '16px' }}>
```

### ✅ Correct
```tsx
<Box mb={4} p={3}>
```

## Standard Props

### Spacing
- **Margin**: `m`, `mt`, `mb`, `ml`, `mr`, `mx`, `my`
- **Padding**: `p`, `pt`, `pb`, `pl`, `pr`, `px`, `py`
- Use numeric values: `mb={4}`, `p={3}`, `px={2}`

### Layout
- **Flex**: `flexDirection`, `alignItems`, `justifyContent`, `flex`
- **Box**: `as`, `backgroundColor`, `maxWidth`, `minHeight`

### Components
- **Heading**: `type={1-6}`, `color="white"`
- **Body**: `size="small" | "large"`, `color`
- **Button**: `variant="primary" | "secondary" | "ghost"`, `width`
- **Glyph**: `category`, `name`, `size`, `color`

## Provider Setup

Use `PrismaProvider` with:
```tsx
<PrismaProvider
  brand="ED"
  version="cobalt"
  currencyLocale="en"
  dateFnsLocale={enUS}
>
```

## InnerLabel Pattern

Add focus/blur handlers for proper label animation:
```tsx
<Input
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  label={<InnerLabel isEmpty={!value && !focused} stateType="default">Label</InnerLabel>}
/>
```

## Reference
Check `design-system-docs/` folder for component APIs.
