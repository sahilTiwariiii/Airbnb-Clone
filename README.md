```css
.mybossliksn {
	padding: 20px;
	font-size: 14px;
	line-height: 18px;
	font-weight: 500;
	color: rgb(106, 106, 106);
}
.jusfirsthu {
	padding-right: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 14px;
	line-height: 18px;
	font-weight: 500;
	color: rgb(106, 106, 106);
}
.firstfirstfootercontainerny {
	margin-top: 36px;
}
.edivedenil {
	height: 1px;
	margin-top: 15px;
	background-color: #d3cfc9;
}

/* Active underline */
.mybossliksn.active::after,
.jusfirsthu.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0; /* Position underline directly below the link */
  width: 100%;
  height: 2px; /* Height of the underline */
  background-color: black; /* Color of the underline */
}


@media (max-width: 902px) {
	.firstfirstfootercontainerny {
		display: flex;
		overflow-x: auto; /* Enable horizontal scrolling */
		white-space: nowrap; /* Prevents wrapping of text to the next line */
		scroll-behavior: smooth; /* Smooth scrolling */
	}

	/* Hide the scrollbar, but still allow scrolling */
	.firstfirstfootercontainerny::-webkit-scrollbar {
		display: none;
	}
	.firstfirstfootercontainerny {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
 
	/* Link styling to ensure proper spacing */
	.firstfirstfootercontainerny .mybossliksn,
	.firstfirstfootercontainerny .jusfirsthu {
		display: inline-block; /* Keep links inline */
		padding: 10px 20px; /* Adjust padding as needed */
		text-align: center;
		white-space: nowrap; /* Ensure single-line text */
	}
}
```
<!-- gpt css -->

```css
/* General styles for inactive links */
.mybossliksn,
.jusfirsthu {
  padding: 20px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: rgb(106, 106, 106);
  text-decoration: none; /* Remove default underline */
  position: relative; /* Position for the underline */
  cursor: pointer; /* Make the div look clickable */
}

/* Active underline */
.mybossliksn.active::after,
.jusfirsthu.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0; /* Position underline directly below the link */
  width: 100%;
  height: 2px; /* Height of the underline */
  background-color: black; /* Color of the underline */
}

.firstfirstfootercontainerny {
  margin-top: 36px;
  display: flex;
  justify-content: space-around; /* Equal space between links */
}

.edivedenil {
  height: 1px;
  margin-top: 15px;
  background-color: #d3cfc9;
}

@media (max-width: 902px) {
  .firstfirstfootercontainerny {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent wrapping of text */
    scroll-behavior: smooth;
  }

  .firstfirstfootercontainerny::-webkit-scrollbar {
    display: none;
  }

  .firstfirstfootercontainerny {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

```