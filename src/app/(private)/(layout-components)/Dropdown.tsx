interface DropdownProps {
  indicatorValue?: any,
  indicatorIcon: any,
  indicatorClass?: string,
  className?: string,
  children: any
}
const Dropdown = ({
  indicatorValue: indicatorValue,
  indicatorIcon: icon,
  indicatorClass: indicatorClass,
  className: className,
  children: children
}: DropdownProps) => {
  className ??= '';
  indicatorClass ??= '';

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className={`btn btn-ghost btn-circle ${indicatorValue ? '' : indicatorClass}`}>
        {
          indicatorValue ?
            <div className={`indicator ${indicatorClass}`}>
              { icon } <span className="badge badge-xs badge-primary indicator-item">{indicatorValue}</span>
            </div>
          : icon
        }
      </label>
      <div tabIndex={0} className={`z-[1] dropdown-content ${className}`}>
        { children }
      </div>
    </div>
  );
}

export default Dropdown;