<?php

include('db_connection.php');

  $rows = array();
  $query =  "SELECT gb_interview_videos.title, gb_interview_videos.thumbnail, gb_interview_videos.link FROM gb_interview_videos INNER JOIN gb_interview_professions ON gb_interview_professions.id = gb_interview_videos.id_profession WHERE  gb_interview_professions.category = '{$_GET['category']}' AND gb_interview_professions.title = '{$_GET['title']}'";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $rows[] = $row;
  }
  
  echo json_encode($rows);
  mysqli_close($conn);
// echo <<<EOT
// {
//   "videos":[
//     {"title": "About Social Work", "thumbnail":"social_work_1.jpg", "link": "aZkRdmgtgIM"},
//     {"title": "A Typical Day in Social Work", "thumbnail":"social_work_2.jpg", "link": "eCEd1rNEM7k"},
//     {"title": "Challenges in Social Work", "thumbnail":"social_work_3.jpg", "link": "-ML4CaMm6gk"},
//     {"title": "Perks in Social Work", "thumbnail":"social_work_4.jpg", "link": "UucmbwZlFto"},
//     {"title": "Staying Current in Social Work", "thumbnail":"social_work_5.jpg", "link": "vDXORdcDvhA"},
//     {"title": "Advice for Individuals interested in Social Work", "thumbnail":"social_work_6.jpg", "link": "fd4uDf5lls4"}
//   ]
// }
// EOT;
