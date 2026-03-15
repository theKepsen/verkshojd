### ToolTip

```typescript
import { Tooltip } from "react-tooltip";

<>
    <span data-tooltip-id={"PopUpViewToolTip"} style={{ cursor: "help" }}>
        <InfoIcon />
    </span>
    <Tooltip
        id={"PopUpViewToolTip"}
        place="top-start"
        className="infoToolTip"
    >
        <>
         {/* Content */}
        </>
    </Tooltip>
</>
```

### Active Page

```typescript
import { useLocation } from "react-router-dom";

const location = useLocation();

location.pathname === "/";
```

### Navigate

```typescript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/");
```

### Timeout

```typescript
const timeoutRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
  return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
}, []);

const func = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(async () => {
    await doStuff();
    timeoutRef.current = null;
  }, 3000);
};
```

### favicon

```html
<link href=".png" rel="icon" type="image/png" />
```
