# Prisma Design System Usage Rules

## Critical Guidelines

### Do NOT use `sx` or `className` props

**Important**: The `sx` and `className` props should **NOT** be used in Prisma Design System components. These props are reserved for innovative/experimental features only and should not be used in standard development.

#### ❌ Incorrect Usage

```tsx
// DON'T DO THIS
<Box sx={{ marginBottom: '24px', padding: '16px' }}>
  <Heading sx={{ color: 'red' }}>Title</Heading>
</Box>

<Card className="custom-card">
  Content
</Card>
```

#### ✅ Correct Usage

Use the standard props defined in the Prisma Design System instead:

```tsx
// DO THIS
<Box mb={4} p={3}>
  <Heading type={2}>Title</Heading>
</Box>

<Card p={4}>
  Content
</Card>
```

### Standard Props Reference

#### Spacing Props (Box, Flex, Card, etc.)

Use spacing props with numeric values (following the design system's spacing scale):

- **Margin**: `m`, `mt`, `mb`, `ml`, `mr`, `mx`, `my`
- **Padding**: `p`, `pt`, `pb`, `pl`, `pr`, `px`, `py`

Examples:
- `mb={4}` - margin bottom
- `mt={2}` - margin top
- `p={3}` - padding all sides
- `px={4}` - padding left and right
- `py={2}` - padding top and bottom

#### Layout Props

- **Flex component**:
  - `flexDirection` - "row" | "column" | "row-reverse" | "column-reverse"
  - `alignItems` - "flex-start" | "center" | "flex-end" | "stretch"
  - `justifyContent` - "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
  - `flex` - numeric value for flex grow/shrink

- **Box component**:
  - `as` - HTML element to render as ("div" | "header" | "main" | "section" | etc.)

#### Component-Specific Props

- **Heading**: `type={1|2|3|4|5|6}`
- **Body**: `size="small" | "large"`
- **Button**: `variant="primary" | "secondary" | "ghost"`
- **Card**: `p={number}` for padding
- **Glyph**: `category` and `name` props, `size="tiny" | "small" | "base" | "medium" | "large" | "xlarge"`

### Layout Strategy

Instead of using custom CSS via `sx` or `className`, compose your layouts using:

1. **Nested Box components** with spacing props
2. **Flex components** for flexbox layouts
3. **Standard component props** for styling

Example:
```tsx
// Compose layouts with standard props
<Box mb={4}>
  <Flex alignItems="center" justifyContent="space-between">
    <Heading type={2}>Title</Heading>
    <Button variant="primary">Action</Button>
  </Flex>
</Box>

<Box mt={3} p={4}>
  <Card p={3}>
    <Body>Content</Body>
  </Card>
</Box>
```

### When You Need Custom Styling

If you find yourself needing custom styling that isn't available through standard props:

1. **First**, check if there's a Prisma component that provides the functionality
2. **Second**, compose existing components to achieve the desired layout
3. **Last resort**, consult with the design system team to determine if a new standard prop should be added

**Never use `sx` or `className` as a workaround.**

---

## Summary

- ❌ **Never use**: `sx` or `className` props
- ✅ **Always use**: Standard Prisma Design System props (spacing, layout, component-specific)
- 📚 **Reference**: Check design-system-docs folder for complete component API documentation
