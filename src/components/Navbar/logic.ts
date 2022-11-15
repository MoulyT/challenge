export const activeLink = (href: string) => {
  const currentPath: string = window.location.pathname
  let isActive = false
  if (currentPath === href) {
    isActive = true
  }
  return isActive
}
