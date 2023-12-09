//layout only applied to Drinks Page
//{children}- every page in and drink/'''' including drinks/ will have this format
/*Code mockup (mockup-code) is used to show a block of code in a box that looks like a code editor.

<pre data-prefix="$">- represents block of code with prefix-$. pre tag used for perfomated text, such as code.
The data-prefix attribute is often used for styling purposes.

<code>npx create-next-app@latest nextjs-j</code>
This is the code snippet displayed within the mockup code block. 
It shows the command to create a new Next.js app using create-next-app.

*/

/*
Why is {children} placed before </div> and not after?

The placement of {children} before the closing </div> tag is a common pattern in React when creating layout components. 
The reason for this order is to allow the content passed as children to be rendered inside the layout container.

In JSX, the content between the opening and closing tags of a component is accessed through the children prop. 
By placing {children} where it is, you ensure that 
any components or elements placed between the opening and closing tags of DrinksLayout 
will be rendered at the correct position within the component's structure.
*/

const DrinksLayout = ({children}) => {
  return (
    <div className="max-w-xl">
        <div className="mockup-code mb-8">
            <pre data-prefix="$"> 
                <code>npx create-next-app@latest nextjs-j</code>
            </pre>
        </div>
        {children}
    </div>
  )
}

export default DrinksLayout