import React, { useState } from 'react';

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [date, setDate] = useState(0);

	return (
		<Context.Provider value={{ date, setDate }}>
			{children}
		</Context.Provider>
	);
};
