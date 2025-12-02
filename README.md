App Name: App Station

Description: AppStation is a fast and easy platform for downloading apps and software. With a clean design and simple navigation, you can quickly find the tools you need without confusion. Apps are neatly organized into categories like productivity, entertainment, games, and utilities, making discovery effortless. AppStation focuses on safe, trusted, and updated downloads, ensuring you always get reliable versions. With helpful app details and smart search, it offers a smooth experience for both beginners and advanced users. AppStation makes downloading apps simple, secure, and convenient.

Technologies: Html, CSS, Tailwind CSS, Daisy Ui, Javascript, React, ReactRouter, Vite.


 useEffect(() => {
    axios("/appsData.json")
      .then((data) => {
        setLoading(true);
        setTimeout(() => {
          if (search) {
            const term = search.trim().toLocaleLowerCase();
            const searched = data.data?.filter((app) =>
              app.title.toLocaleLowerCase().includes(term)
            );
            //   console.log(searched);
            setApps(searched);
          } else {
            setApps(data.data);
          }
          setLoading(false);
        }, 1000);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search]);