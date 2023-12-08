# import requests
# from bs4 import BeautifulSoup
# import csv
# from io import StringIO

# # URL of the webpage containing the table
# url = "https://developers.google.com/public-data/docs/canonical/countries_csv"

# # Fetch the HTML content from the URL
# response = requests.get(url)
# html_content = response.text

# # Parse the HTML content
# soup = BeautifulSoup(html_content, "html.parser")

# # Find the first <table> tag in the HTML
# table = soup.find("table")

# # Extract table headers
# headers = [header.text for header in table.find_all("th")]

# # Extract table rows
# rows = []
# for row in table.find_all("tr"):
#     cells = row.find_all("td")
#     if cells:
#         rows.append([cell.text for cell in cells])

# # Convert to CSV
# csv_output = StringIO()
# csv_writer = csv.writer(csv_output)
# csv_writer.writerow(headers)
# csv_writer.writerows(rows)

# csv_content = csv_output.getvalue()
# csv_output.close()

# # Display a portion of the CSV content
# # Display the first 10 lines for brevity
# print("\n".join(csv_content.splitlines()[:10]))

# countries_latlng_csv_file_path = 'countries_latlng.csv'

# with open(countries_latlng_csv_file_path, 'w') as file:
#     file.write(csv_content)


import pandas as pd
from sqlalchemy import create_engine

# Load the CSV file into a DataFrame
csv_file = 'countries_latlng.csv'
df = pd.read_csv(csv_file)

# Define your MySQL connection parameters
username = 'admin'
password = ''
# or your database server IP
host = 'appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com'
database = 'mailex'

# Create a SQLAlchemy engine
engine = create_engine(
    f'mysql+pymysql://{username}:{password}@{host}/{database}')

# Write the DataFrame to a MySQL table
table_name = 'countries_latlng'
df.to_sql(table_name, con=engine, if_exists='replace', index=False)

print(
    f"CSV data has been successfully imported into the MySQL table '{table_name}'.")
