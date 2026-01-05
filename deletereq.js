
const axios = require('axios');

const recruiterCredentials = {
  email: 'suhaningp2604@gmail.com',
  password: 'riya2604',
  role: 'Recruiter',
};

async function main() {
  let cookie = '';
  try {
    const loginRes = await axios.post('http://localhost:5011/api/user/login', recruiterCredentials, {
      withCredentials: true,
    });
    if (loginRes.headers['set-cookie']) {
      cookie = loginRes.headers['set-cookie'].join('; ');
    }
    console.log('✅ Logged in as recruiter.');
  } catch (err) {
    console.error('❌ Login failed:', err.response?.data || err.message);
    return;
  }

  try {
    const res = await axios.get('http://localhost:5011/api/company/get', {
      headers: { Cookie: cookie },
      withCredentials: true,
    });

    const companiesToDelete = res.data.companies.filter(c =>
      /^Company\s\d+$/.test(c.name)
    );

    for (const company of companiesToDelete) {
      try {
        
        const jobDelRes = await axios.delete(`http://localhost:5011/api/job/delete/by-company/${company._id}`, {
          headers: { Cookie: cookie },
          withCredentials: true,
        });
        console.log(`🗑️ Deleted jobs for: ${company.name}`);

        
        await axios.delete(`http://localhost:5011/api/company/delete/${company._id}`, {
          headers: { Cookie: cookie },
          withCredentials: true,
        });
        console.log(`🗑️ Deleted company: ${company.name}`);
      } catch (err) {
        console.error(`❌ Failed to delete ${company.name}:`, err.response?.data || err.message);
      }
    }

    console.log(`✅ Finished cleanup of ${companiesToDelete.length} placeholder companies.`);
  } catch (err) {
    console.error('❌ Failed to fetch companies:', err.response?.data || err.message);
  }
}

main();
