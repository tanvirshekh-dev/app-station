export const loadInstallation = () => {
  try {
    const data = localStorage.getItem("installation");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateApps = (app) => {
  const installation = loadInstallation();
  try {
    const isDuplicate = installation.some((p) => p.id === app.id);
    if (isDuplicate) return alert("Already added this apps");
    const updatedInstallation = [...installation, app];
    localStorage.setItem("installation", JSON.stringify(updatedInstallation));
  } catch (err) {
    console.log(err);
    return [];
  }
};


export const removeFromInstallation = (id) => {
  const installation = loadInstallation();

  try {
    const updatedInstallation = installation.filter((p) => p.id !== id);
    localStorage.setItem("installation", JSON.stringify(updatedInstallation));
  } catch (err) {
    console.log(err);
  }
}