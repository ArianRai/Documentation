# TypeScript


```typescript
type ReadOnlyProps<T> = {
    readonly [P in keyof T]: T[P]
}

interface Props {
   title: string
   content: string
}

type ReadOnlyComponentProps = ReadOnlyProps<Props>
```
