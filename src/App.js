import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

function App() {

  const questionsArr = [
    {
      title: 'Nested Checkbox',
      path: 'nestedCheckbox'
    },
    {
      title: 'Tabs',
      path: 'tabs'
    },
    {
      title: 'Pagination',
      path: 'pagination'
    },
    {
      title: 'Star Rating',
      path: 'starRating'
    },
    {
      title: 'OTP',
      path: 'otp'
    },
    {
      title: 'Progress Bar',
      path: 'progressBar'
    },
    {
      title: 'Accordion',
      path: 'accordion'
    },
    {
      title: 'File Explorer',
      path: 'fileExplorer'
    }
  ]

  return (
    <div className="App">
      <div className="container mx-auto px-4 max-w-full">
        <div className="py-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {
              questionsArr.map((question) => {
                return (
                  <Link to={question.path} state={{ questionTitle: question.title }}>
                    <div class="bg-white rounded-lg shadow-lg p-6 text-left cursor-pointer">
                      <h3 class="text-lg font-semibold mb-2 text-gray-900">{question.title}</h3>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
