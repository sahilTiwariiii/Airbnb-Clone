1)react hook forms<br/>
2)useMemo and useCallback in reactjs<br/>
3)zudstand<br/>
4)redux Toolkit<br/>
5)nextjs 14 routing<br/>
6)nextjs ke sath redux toolkit configuration-> **Coders Gyan** best explanatoin because in nextjs we have diffrent configuration [text](https://www.youtube.com/watch?v=JeidRRc1-y4)<br/>
7) react-select -> Documentation best explanation and also use chatgpt
8) world-countries

**Is Project me humne react-forms hook ko 2 tarike se implement kiya hai**<br>

1) Login/Register->toh phala tarika toh ye hai jaisa humne register aur login me simple tarike se react-form-hook use kiya hai aur usse data liya hai<br/>

2) Listing Creation -> yani jab hume koi new propert ko list karna hota hai toh jo modal khultha hai jis model me 5 diffrent pages hai toh us chez ko karne ke hamare pass 2 tarika hai <br/>

--- > 1) phala tarika toh ye ki hum simple 5 states banaye aur 1 counter state banaye aur hai bar koi dusari div dhikaye lekin usme hamara component bohot jyada heavy ban jyega lekin ye wala chiz jaday easy lekin jab hum nextjs use kar hi rahe hai toh fir agar hamar component bohot bada ho jyega toh fir page bhi heavy ho jyega toh is case me hum 2 dusara tarika use karenge aur dhekhenge ki agar humare pas **'Multi level Form'** hai toh usko hum **'React hook form'** se kaisa handle karenge kyuki ek hi component me react-hook-form se data lena toh aasan hota hai lekin jab hamare pass multi-level-form ho tab kya karenge <br/>

----> 2) jab hamare pass **'Multi level Form'** ho tab hum kaisa use kare 'react-form-hook' ko aur vo bhi tab jab hamare pass diffrent component ho har step me ek naya component ho tab hum kaisa pura data lenge us **Multi-level-form** ka toh us tarike se hum implement karenge <br/>

just for read 
To manage a multi-level form with 5 pages using React Hook Form while keeping your components lightweight and still being able to access the entire form data, you can organize your components using the following approach:

1. **React Hook Form Context**: You can use `useFormContext` from React Hook Form to share form state across multiple components. This allows you to break down the form into smaller, manageable components (one for each step/page) without losing the ability to access the complete form data.

2. **State Management for Form Steps**: Manage the navigation between steps (pages) using either local state (`useState`) or, if needed, a more global state management solution like Redux or Context API.

3. **Form Data Persistence Across Pages**: Using the same `react-hook-form` instance across all components ensures that form data persists across pages without the need to manage it manually in each component.

### Step-by-Step Example:

1. **Set up the main form component** where you define the `react-hook-form` instance and the form navigation logic.

2. **Use `FormProvider`** to pass down the `react-hook-form` instance to all child components.

3. **Create separate components** for each form page and use `useFormContext` to access the form methods.

#### Code Example:

**MainForm.js** (Parent Component)
```jsx
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
// ... import all steps

const MainForm = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log("Final Form Data:", data);
    // You can handle form submission here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {/* Add more steps conditionally */}
        
        <div>
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 5 ? (
            <button type="button" onClick={handleNext}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MainForm;
```

**Step1.js** (One of the Step Components)
```jsx
import React from "react";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const { register } = useFormContext(); // Access form context here

  return (
    <div>
      <h2>Step 1</h2>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
    </div>
  );
};

export default Step1;
```

**Step2.js** (Another Step Component)
```jsx
import React from "react";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Step 2</h2>
      <input {...register("email")} placeholder="Email" />
      <input {...register("phone")} placeholder="Phone Number" />
    </div>
  );
};

export default Step2;
```

### Explanation:
- **FormProvider**: Wraps the form so that the `useFormContext` hook can be used in child components.
- **Step Components**: Each step (or page) is a separate component where you register the inputs using `useFormContext`.
- **Persisted Data**: As you navigate between steps, the form data remains accessible and you can submit the entire data at the end.

This approach keeps your components lightweight while maintaining access to the entire form data across pages.