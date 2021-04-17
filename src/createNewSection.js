import uniqid from 'uniqid';
const general = {
  title: 'General Information',
  optional: false,
  fields: [
    {
      size: 'small',
      faIcon: 'fas fa-user-friends',
      placeholder: 'First name',
      type: 'text',
      required: true,
      value: '',
    },
    {
      size: 'small',
      faIcon: 'fas fa-user-friends',
      placeholder: 'Last name',
      type: 'text',
      required: true,
      value: '',
    },
    {
      size: 'small',
      faIcon: 'fas fa-envelope',
      placeholder: 'Email',
      type: 'email',
      required: true,
      value: '',
    },
    {
      size: 'small',
      faIcon: 'fas fa-mobile',
      placeholder: 'Phone number',
      type: 'tel',
      required: true,
      value: '',
    },
    {
      size: 'big',
      placeholder: 'Briefly describe yourself',
      required: true,
      value: '',
    },
  ],
};

const edu = {
  title: 'Education',
  optional: true,
  fields: [
    {
      faIcon: 'fas fa-school',
      size: 'small',
      type: 'text',
      placeholder: 'School name',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-certificate',
      size: 'small',
      type: 'text',
      placeholder: 'Title of study',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-calendar-week',
      size: 'small',
      type: 'date',
      placeholder: 'Start of study',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-calendar-week',
      size: 'small',
      type: 'date',
      placeholder: 'End of study',
      required: true,
      value: '',
    },
  ],
};

const job = {
  title: 'Job Experience',
  optional: true,
  fields: [
    {
      faIcon: 'fas fa-building',
      size: 'small',
      type: 'text',
      placeholder: 'Company name',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-briefcase',
      size: 'small',
      type: 'text',
      placeholder: 'Your position',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-calendar-week',
      size: 'small',
      type: 'date',
      placeholder: 'Start date',
      required: true,
      value: '',
    },
    {
      faIcon: 'fas fa-calendar-week',
      size: 'small',
      type: 'date',
      placeholder: 'End date',
      required: true,
      value: '',
    },
    {
      size: 'big',
      placeholder: 'What did you do on the job?',
      required: true,
    },
  ],
};

//Creates a deep copy of the objects
const createNewSection = function (type) {
  if (type === 'general')
    return Object.assign({ id: uniqid() }, JSON.parse(JSON.stringify(general)));
  if (type === 'edu')
    return Object.assign({ id: uniqid() }, JSON.parse(JSON.stringify(edu)));
  if (type === 'job')
    return Object.assign({ id: uniqid() }, JSON.parse(JSON.stringify(job)));
};

export default createNewSection;
